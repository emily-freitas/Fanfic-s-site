document.addEventListener('DOMContentLoaded', function() {
    const shopNowButton = document.getElementById('shop-now');
    shopNowButton.addEventListener('click', function() {
        document.getElementById('essentials').scrollIntoView({ behavior: 'smooth' });
    });

    const productButtons = document.querySelectorAll('.product button');
    productButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`Cadraste-se para adcionar o livro "${this.parentElement.querySelector('h3').innerText}" nos favoritos!`);
            this.innerText = 'LER';
            this.disabled = true;
            checkAllAdded();
        });
    });

    function checkAllAdded() {
        const allAdded = Array.from(productButtons).every(button => button.disabled);
        if (allAdded) {
            setTimeout(() => {
                alert(' Cadraste-se para que todos os livros sejam adicionados aos favoritos!');
            }, 500);
        }
    }

    const registerButton = document.getElementById('register-button');
    registerButton.addEventListener('click', function() {
        window.location.href = 'pagina-de-cadastro.html';
    });
});

