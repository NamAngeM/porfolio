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
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
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

    // Parallax effect on mouse move for the hero card
    const heroVisual = document.querySelector('.hero-visual');
    const visualCard = document.querySelector('.visual-card');

    if (heroVisual && visualCard) {
        heroVisual.addEventListener('mousemove', (e) => {
            const rect = heroVisual.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;
            
            visualCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        heroVisual.addEventListener('mouseleave', () => {
            visualCard.style.transform = `perspective(1000px) rotateX(10deg) rotateY(-15deg)`;
            visualCard.style.transition = 'transform 0.5s ease';
        });

        heroVisual.addEventListener('mouseenter', () => {
            visualCard.style.transition = 'none';
        });
    }
});
