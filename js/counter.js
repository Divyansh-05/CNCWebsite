function startCounter() {
    const counters = document.querySelectorAll('.counter-number');
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = target / 100; // Adjust speed
            
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 50); // Smooth animation
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

// Start Counter when the section is visible
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter();
            observer.disconnect(); // Run only once
        }
    });
});

observer.observe(document.querySelector('.counter-section'));