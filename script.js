document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isActive = header.classList.contains('active');

        // Закрываем все открытые блоки
        document.querySelectorAll('.accordion-body').forEach(el => {
            el.classList.remove('show');
            el.style.maxHeight = null;
        });

        document.querySelectorAll('.accordion-header').forEach(el => el.classList.remove('active'));

        // Если текущий блок не активен — открыть его
        if (!isActive) {
            body.classList.add('show');
            body.style.maxHeight = body.scrollHeight + "px"; // Устанавливаем высоту для анимации
            header.classList.add('active');
        }
    });
});