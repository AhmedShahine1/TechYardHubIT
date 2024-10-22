document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.First-Part, .Second-Part, .Third-Part, .Fourth-Part');
    const backgroundVideo = document.querySelector('.background-video');
    const thirdPart = document.querySelector('.Third-Part');
    const FourthPart = document.querySelector('.Fourth-Part');
    const firstframe = thirdPart.querySelector('h2.frame-5')
    const span2 = thirdPart.querySelector('.span-2');
    const span3 = thirdPart.querySelector('.span-3');
    const span4 = thirdPart.querySelector('.span-4');
    const hr = thirdPart.querySelector('hr');

    function handleScrollAnimations() {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionOffset = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Check if the section is in the viewport
            if (scrollPosition >= sectionOffset - window.innerHeight / 2 && scrollPosition < sectionOffset + sectionHeight) {
                section.style.opacity = 1;
                if (section === thirdPart) {
                    const thirdPartSpans = thirdPart.querySelectorAll('h2.frame-5 span, div.frame-5 span');
                    thirdPartSpans.forEach((span, index) => {
                        span.classList.add('third-part-animation');
                        const time = index *.3;
                        span.style.animationDelay = `${time}s`;
                    });
                    // Set a timeout to add animation class to spans 3 and 4 after 5 seconds
                    setTimeout(() => {
                        hr.classList.add('divider');
                    }, 3000); // 5000 milliseconds = 5 seconds
                }
                if (section === FourthPart) {
                    firstframe.style.position = 'absolute';
                    firstframe.classList.add('animated');
                    setTimeout(() => {
                        hr.style.display = 'none';
                        if (span2) span2.style.display = 'none'; // Hide span-2
                        if (span3) span3.style.display = 'none'; // Hide span-3
                        if (span4) span4.style.display = 'none'; // Hide span-4
                    }, 1000); 
                }
            } else {
                section.style.opacity = 0;
            }
        });
    }

    // Initial fade-in on page load
    handleScrollAnimations();

    // Scroll event listener for triggering animations
    document.addEventListener("scroll", handleScrollAnimations);
});
