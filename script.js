document.addEventListener('DOMContentLoaded', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---------- Apparition du haut de page ----------
    requestAnimationFrame(() => {
        document.querySelectorAll('.fade-in-up').forEach(el => el.classList.add('visible'));
    });

    // ---------- Apparitions au défilement (décalées dans les grilles) ----------
    document.querySelectorAll('.skills-grid, .projects-grid, .education-grid').forEach(grid => {
        [...grid.children].forEach((child, i) => {
            child.classList.remove('delay-1', 'delay-2', 'delay-3');
            child.style.transitionDelay = `${(i % 3) * 0.1}s`;
        });
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            el.classList.add('active');
            // Retire le délai après l'apparition pour que les survols restent réactifs
            el.addEventListener('transitionend', () => { el.style.transitionDelay = ''; }, { once: true });
            observer.unobserve(el);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ---------- Compteurs des chiffres clés ----------
    const animateCount = el => {
        const to = Number(el.dataset.to);
        if (reduceMotion) { el.textContent = to; return; }
        const duration = 1400;
        const start = performance.now();
        const tick = now => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(to * eased);
            if (p < 1) requestAnimationFrame(tick);
        };
        el.textContent = '0';
        requestAnimationFrame(tick);
    };
    setTimeout(() => document.querySelectorAll('.count').forEach(animateCount), 450);

    // ---------- Navigation : section active, indicateur, barre de progression ----------
    const nav = document.querySelector('.glass-nav');
    const progress = document.querySelector('.scroll-progress');
    const indicator = document.querySelector('.nav-indicator');
    const navLinks = [...document.querySelectorAll('.nav-links a, .mobile-bottom-nav a')];
    const sections = [...document.querySelectorAll('main section[id]')];
    const timeline = document.querySelector('.timeline');

    const moveIndicator = link => {
        if (!indicator) return;
        if (!link) { indicator.style.opacity = '0'; return; }
        indicator.style.width = `${link.offsetWidth}px`;
        indicator.style.transform = `translateX(${link.parentElement.offsetLeft}px)`;
        indicator.style.opacity = '1';
    };

    let currentId = null;
    const setActive = id => {
        if (id === currentId) return;
        currentId = id;
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
        moveIndicator(document.querySelector(`.nav-links a[href="#${id}"]`));
    };

    const onScroll = () => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
        nav.classList.toggle('scrolled', y > 20);

        // Section active : la dernière dont le haut a passé le tiers de l'écran
        const line = window.innerHeight * 0.35;
        let active = sections[0]?.id;
        sections.forEach(s => { if (s.getBoundingClientRect().top <= line) active = s.id; });
        if (y + window.innerHeight >= document.documentElement.scrollHeight - 4) active = sections[sections.length - 1].id;
        setActive(active);

        // Ligne de la frise qui se dessine
        if (timeline) {
            const r = timeline.getBoundingClientRect();
            const p = Math.min(Math.max((window.innerHeight * 0.75 - r.top) / r.height, 0), 1);
            timeline.style.setProperty('--line-progress', reduceMotion ? 1 : p.toFixed(3));
        }
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => { onScroll(); ticking = false; });
    }, { passive: true });
    window.addEventListener('resize', () => moveIndicator(document.querySelector('.nav-links a.active')));
    onScroll();

    // ---------- Filtre des projets avec transition ----------
    const rolePills = document.querySelectorAll('.role-pill');
    const projectCards = document.querySelectorAll('.project-card[data-roles]');

    rolePills.forEach(pill => {
        pill.addEventListener('click', () => {
            const role = pill.dataset.role;
            rolePills.forEach(p => {
                const isActive = p === pill;
                p.classList.toggle('active', isActive);
                p.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            });

            projectCards.forEach(card => card.classList.add('is-filtering'));
            setTimeout(() => {
                projectCards.forEach(card => {
                    const roles = (card.dataset.roles || '').split(/\s+/);
                    card.classList.toggle('is-hidden', !(role === 'all' || roles.includes(role)));
                });
                requestAnimationFrame(() => projectCards.forEach(card => card.classList.remove('is-filtering')));
            }, reduceMotion ? 0 : 220);
        });
    });
});
