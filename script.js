document.addEventListener('DOMContentLoaded', () => {
    // Initial hero animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.fade-in-up');
        heroElements.forEach(el => {
            el.classList.add('visible');
        });
    }, 100);

    // Scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Role filter for projects
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

            projectCards.forEach(card => {
                const roles = (card.dataset.roles || '').split(/\s+/);
                const match = role === 'all' || roles.includes(role);
                card.classList.toggle('is-hidden', !match);
            });
        });
    });

});
