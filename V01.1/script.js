document.addEventListener('DOMContentLoaded', () => {
    // --- Seleção de Elementos ---
    const backToTopButton = document.getElementById('back-to-top');
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');
    const headerHeight = document.querySelector('header').offsetHeight;

    // --- Funções ---

    // Função para destacar o link de navegação ativo
    const highlightActiveLink = () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 1; // -1 para um pequeno buffer
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    // Função para controlar a visibilidade do botão "Voltar ao Topo"
    const toggleBackToTopButton = () => {
        backToTopButton.style.display = window.scrollY > 100 ? 'block' : 'none';
    };

    // --- Event Listeners ---
    window.addEventListener('scroll', () => {
        toggleBackToTopButton();
        highlightActiveLink();
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Executa as funções ao carregar a página para o estado inicial correto
    toggleBackToTopButton();
    highlightActiveLink();
});
