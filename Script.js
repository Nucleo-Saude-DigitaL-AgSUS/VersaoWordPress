
/* Bloco Carroscel Equipe front-end Gustavo
// CARROSSEL EQUIPE
const carouselImages = document.querySelector('.carousel-images');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalImages = dots.length;
const autoRotateInterval = 3000; // Tempo entre trocas (em milissegundos)

// Atualiza o carrossel para o índice atual
function updateCarousel(index) {
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Próxima imagem
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel(currentIndex);
}

// Imagem anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel(currentIndex);
}

// Clique nos botões de navegação
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Clique nos indicadores
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateCarousel(currentIndex);
    });
});

// Rotação automática
let autoRotate = setInterval(nextImage, autoRotateInterval);

// Pausar rotação automática ao interagir com os controles
[nextButton, prevButton, ...dots].forEach(control => {
    control.addEventListener('mouseenter', () => clearInterval(autoRotate));
    control.addEventListener('mouseleave', () => {
        autoRotate = setInterval(nextImage, autoRotateInterval);
    });
});

Fim do bloco do  Carroscel Equipe front-end Gustavo */

/* Bloco Carroscel Equipe front-end Jeremias Silva 31/01/2025*/
const carouselImages = document.querySelector('.carousel-images');  
const dotsContainer = document.querySelector('.carousel-indicators');  
const prevButton = document.querySelector('.prev');  
const nextButton = document.querySelector('.next');  

let currentIndex = 0;  
const totalImages = carouselImages.children.length;  
const autoRotateInterval = 5000; // Tempo entre trocas (em milissegundos)  

// Cria os indicadores dinamicamente  
for (let i = 0; i < totalImages; i++) {  
    const dot = document.createElement('div');  
    dot.classList.add('dot');  
    dot.setAttribute('data-index', i);  
    dot.addEventListener('click', () => {  
        currentIndex = i;  
        updateCarousel();  
    });  
    dotsContainer.appendChild(dot);  
}  

// Atualiza o carrossel para o índice atual  
function updateCarousel() {  
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;  
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));  
    document.querySelector(`.dot[data-index="${currentIndex}"]`).classList.add('active');  
}  

// Próxima imagem  
function nextImage() {  
    currentIndex = (currentIndex + 1) % totalImages;  
    updateCarousel();  
}  

// Imagem anterior  
function prevImage() {  
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;  
    updateCarousel();  
}  

// Clique nos botões de navegação  
nextButton.addEventListener('click', nextImage);  
prevButton.addEventListener('click', prevImage);  

// Rotação automática  
let autoRotate = setInterval(nextImage, autoRotateInterval);  

// Pausar rotação automática ao interagir com os controles  
[nextButton, prevButton].forEach(control => {  
    control.addEventListener('mouseenter', () => clearInterval(autoRotate));  
    control.addEventListener('mouseleave', () => {  
        autoRotate = setInterval(nextImage, autoRotateInterval);  
    });  
});  

// Iniciar o carrossel com a primeira imagem ativa  
updateCarousel();
/* Fim do bloco do Carroscel Equipe front-end Jeremias Silva 31/01/2025*/


/* Bloco Sou Usuário    JEremias Silva 31/01/2025 */

document.addEventListener('DOMContentLoaded', () => {  
    // Seleciona todas as imagens que podem ser clicadas  
    const images = document.querySelectorAll('.BotaoClicavel');  

    images.forEach((image) => {  
        image.addEventListener('click', () => {  
            const textBox = image.nextElementSibling; // Seleciona o próximo elemento (texto)  

            // Exibe o texto suavemente  
            textBox.style.display = 'block'; // Altera o estilo para exibir  
            setTimeout(() => {  
                textBox.style.opacity = '1'; // Altera a opacidade para 1  
                // Use uma transição CSS para suavizar essa transição  
            }, 0); // Atraso de 0 para garantir que o display seja alterado antes da opacidade  

            // Define um temporizador para ocultar o texto após 30 segundos  
            setTimeout(() => {  
                textBox.style.opacity = '0'; // Define a opacidade para 0  
                setTimeout(() => {  
                    textBox.style.display = 'none'; // Esconde o texto novamente após a opacidade  
                }, 600); // Tempo suficiente para a animação de saída  
            }, 20000); // 30000 ms = 30 segundos  
        });  
    });  
});


/* Fim do bloco Sou Usuário    JEremias Silva 31/01/2025 */




/** Chatbot Bloco
/*Bloco js posição do mouse sobre imagem, chamada do balão e fechamneto do balão 20-01-2025*/
const chatbot = document.getElementById('chatbot'); // Obtém o elemento da imagem do chatbot
const chatWindow = document.getElementById('chat-window'); // Obtém a janela de chat
const tooltip = document.querySelector('.tooltip'); // Obtém o elemento do balão

let tooltipTimeout;
let closeTimeout;

// Função para abrir a janela de chat e mostrar o balão
function showChat() {
    chatWindow.style.display = 'block'; // Abre a janela de chat
    tooltip.style.display = 'block'; // Mostra o balão
}

// Função para fechar o balão e a janela de chat
function hideChat() {
    tooltip.style.display = 'none'; // Fecha o balão
    chatWindow.style.display = 'none'; // Fecha a janela de chat
}

// Evento ao posicionar o mouse sobre a imagem do chatbot
chatbot.addEventListener('mouseenter', () => {
    tooltipTimeout = setTimeout(() => {
        showChat(); // Chama função para mostrar chat após 2 segundos
        closeTimeout = setTimeout(hideChat, 1600); // Fecha após 3 segundos (300 minis-segundos)
    }, 500); // Aparece após 1 segundos
});

// Evento ao sair com o mouse da imagem do chatbot
chatbot.addEventListener('mouseleave', () => {
    clearTimeout(tooltipTimeout); // Cancela a exibição do balão se sair antes dos 2s
});

// Evento ao clicar nos botões dentro da janela de chat
document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', () => {
        clearTimeout(closeTimeout); // Cancela o fechamento automático ao clicar
        closeTimeout = setTimeout(hideChat, 180000); // Reinicia o timer de fechamento após clique
        // Aqui você pode adicionar lógica adicional se necessário.
    });
});

// Funções adicionais para redirecionamento e abrir WhatsApp
function redirectToSection(section) {
    alert('Redirecionando para ' + section);
}

function openWhatsApp() {
    window.open('https://wa.me/61998109919', '_blank');
}
