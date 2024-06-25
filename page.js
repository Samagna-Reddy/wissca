document.addEventListener("DOMContentLoaded", () => {
    const hoverTargets = document.querySelectorAll(".img-text-wrapper");

    hoverTargets.forEach(target => {
        target.addEventListener("mouseenter", () => {
            const hoverContent = document.createElement('div');
            hoverContent.classList.add('hover-content');
            hoverContent.innerText = target.parentElement.getAttribute("data-hover-text");

            const imageDiv = target.querySelector('div');
            const style = getComputedStyle(imageDiv);
            const width = imageDiv.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
            const height = imageDiv.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom);

            hoverContent.style.width = `${width}px`;
            hoverContent.style.height = `${height}px`;

            target.appendChild(hoverContent);
        });

        target.addEventListener("mouseleave", () => {
            const hoverContent = target.querySelector('.hover-content');
            if (hoverContent) {
                target.removeChild(hoverContent);
            }
        });
    });

    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const slide = document.querySelector('.slide');

    next.addEventListener('click', () => {
        const items = document.querySelectorAll('.item');
        slide.appendChild(items[0]);
    });

    prev.addEventListener('click', () => {
        const items = document.querySelectorAll('.item');
        slide.prepend(items[items.length - 1]);
    });

    setInterval(() => {
        next.click();
    }, 1500);

    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.navbar-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarLinks.classList.remove('active');
            toggleButton.classList.remove('active');
        });
    });
});
