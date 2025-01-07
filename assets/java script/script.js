document.querySelectorAll('.accordion__header').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        
        // Закрыть все открытые элементы
        document.querySelectorAll('.accordion__item').forEach(child => {
            if (child !== parent) {
                child.classList.remove('active');
            }
        });

        // Открыть/закрыть текущий элемент
        parent.classList.toggle('active');
    });
});
