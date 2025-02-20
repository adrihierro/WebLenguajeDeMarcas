// Animacion para los encabezados
const animatedHeadings = document.querySelectorAll('.animated-heading');

function handleScroll() {
    animatedHeadings.forEach( h1 => {
        const rect = h1.getBoundingClientRect();
        const inVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (inVisible) {
            h1.classList.add('visible');
            h1.classList.remove('hidden-top','hidden-bottom');
        } else {
            if ( rect.top < 0 ) {
                h1.classList.add('hidden-top');
                h1.classList.remove('visible', 'hidden-bottom');

            } else if (rect.bottom > window.innerHeight ) {
                h1.classList.add('hidden-bottom');
                h1.classList.remove('visible', 'hidden-top');
            }
        }
    });
}

// Llamara las funciones
window.addEventListener('scroll', handleScroll);
handleScroll();
