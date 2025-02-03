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


/** Chatbot Bloco */

const chatButton = document.getElementById('chatButton');  
const sustoImage = document.getElementById('sustoImage');  
const chatDialog = document.getElementById('chatDialog');  
let dialogTimeout;  

chatButton.addEventListener('mouseover', () => {  
    chatButton.style.opacity = '0';  
    sustoImage.style.display = 'block';  
    sustoImage.style.transform = 'scale(1.05)';  

    setTimeout(() => {  
        sustoImage.style.opacity = '1';  
        
        setTimeout(() => {  
            chatDialog.classList.remove('hidden');  
            resetDialogTimeout();  
        }, 3);  
    }, 300);  
});  

function closeDialog() {  
    chatDialog.classList.add('hidden');  

    setTimeout(() => {  
        sustoImage.style.opacity = '0';  
        sustoImage.style.transform = 'scale(1)';  
        
        setTimeout(() => {  
            sustoImage.style.display = 'none';  
            chatButton.style.opacity = '1';  
        }, 300);  
    }, 300);  
}  

function resetDialogTimeout() {  
    clearTimeout(dialogTimeout);  
    dialogTimeout = setTimeout(() => {  
        closeDialog();  
    }, 10000);  
}  

sustoImage.addEventListener('mouseout', (event) => {  
    if (!chatDialog.contains(event.relatedTarget)) {  
        closeDialog();  
    }  
});  

document.addEventListener('click', (event) => {  
    if (!chatButton.contains(event.target) &&   
        !sustoImage.contains(event.target) &&   
        !chatDialog.contains(event.target)) {  
        closeDialog();  
    }  
});  

const buttons = chatDialog.querySelectorAll('.option-button'); 
buttons.forEach(button => {  
    button.addEventListener('click', () => {  
        closeDialog();  
    });  
});  

function redirectTo(url) {  
    window.location.href = url;  
}  

chatDialog.addEventListener('mouseleave', closeDialog);