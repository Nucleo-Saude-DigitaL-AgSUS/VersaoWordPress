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

/**CORPO - SOU USUÁRIO */
/* Bloco Sou Usuário    Jeremias Silva 31/01/2025 */
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
            }, 20000); // 27000 ms = 30 segundos  
        });  
    });  
});

/* Bloco Sou Profissional    Jeremias Silva 31/01/2025 */ document.addEventListener('DOMContentLoaded', () => {  
    // Seleciona todas as imagens que podem ser clicadas dentro de #Corpo8E  
    const images = document.querySelectorAll('#Corpo9E .BotaoClicavel');  

    images.forEach((image) => {  
        const textBox = image.nextElementSibling; // Seleciona o próximo elemento (texto)  

        // Inicializa a opacidade do texto como 0  
        textBox.style.opacity = '0';  
        textBox.style.display = 'none'; // Garante que o texto comece oculto  

        // Mostra o texto quando o mouse entra  
        image.addEventListener('mouseenter', () => {  
            textBox.style.display = 'block'; // Altera o estilo para exibir  
            setTimeout(() => {  
                textBox.style.opacity = '1'; // Altera a opacidade para 1  
            }, 0); // Atraso de 0 para garantir que o display seja alterado antes da opacidade  
        });  

        // Esconde o texto quando o mouse sai  
        image.addEventListener('mouseleave', () => {  
            textBox.style.opacity = '0'; // Define a opacidade para 0  
            setTimeout(() => {  
                textBox.style.display = 'none'; // Esconde o texto novamente após a opacidade  
            }, 600); // Tempo suficiente para a animação de saída  
        });  
    });  
});

//* Contador dos Indicadores*/

function animateCounter(element, start, end, duration, isPercentage = false) {
    let count = start;
    let increment = (end - start) / (duration / 20);
    element.innerText = isPercentage ? `${start.toFixed(1)}%` : start.toFixed(3);

    let interval = setInterval(() => {
        count += increment;
        if (count >= end) {
            count = end;
            clearInterval(interval);
        }
        element.innerText = isPercentage ? `${count.toFixed(1)}%` : (count / 1000).toFixed(3);
    }, 20);
}

// Criar um Observer para detectar quando as divs entram na tela
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let counterElement = entry.target;

            if (counterElement.id === "ContagemC11D1") {
                animateCounter(counterElement, 0, 6312, 2000); // Contagem de 0 a 6.312
            } else if (counterElement.id === "ContagemC11D2") {
                animateCounter(counterElement, 0, 85, 2000, true); // Contagem de 0 a 85%
            } else if (counterElement.id === "ContagemC11D3") {
                animateCounter(counterElement, 0, 97, 2000, true); // Contagem de 0 a 97%
            }

            observer.unobserve(counterElement); // Para evitar múltiplas execuções
        }
    });
}, { threshold: 0.5 }); // Ativa quando pelo menos 50% do elemento está visível

// Observar os elementos com IDs "ContagemC10D1", "ContagemC10D2" e "ContagemC10D3"
["ContagemC11D1", "ContagemC11D2", "ContagemC11D3"].forEach(id => {
    let element = document.getElementById(id);
    if (element) {
        observer.observe(element);
    }
});