        const barsIcon = document.querySelector('.fa-bars');
        const menu = document.querySelector('.menu');

        barsIcon.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        // Đóng menu khi click vào link
        const menuLinks = document.querySelectorAll('.menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });