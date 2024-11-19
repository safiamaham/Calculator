document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.id === 'clear') {
                display.textContent = '';
            } else if (button.id === 'equals') {
                try {
                    display.textContent = eval(display.textContent);
                } catch {
                    display.textContent = 'Error';
                }
            } else {
                display.textContent += button.textContent;
            }
        });
    });
});
