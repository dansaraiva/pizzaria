document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const form = document.getElementById('reservationForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;

            // Simple validation (HTML5 already handles most)
            if (name && date && time && guests) {
                // Simulate API call/processing
                const submitBtn = form.querySelector('.btn-submit');
                const originalText = submitBtn.innerText;

                submitBtn.innerText = 'Enviando...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    alert(`Obrigado, ${name}! Sua reserva para ${guests} pessoas em ${date} às ${time} foi confirmada.`);
                    form.reset();
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }
        });
    }
});
