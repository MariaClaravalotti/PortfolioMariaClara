document.getElementById("languageButton").addEventListener("click", () => {
  // Determina o idioma atual
  const currentLanguage = document.documentElement.lang === "en" ? "pt" : "en";

  // Atualiza o atributo `lang` no elemento HTML
  document.documentElement.lang = currentLanguage;

  // Seleciona todos os elementos com atributos de tradução
  const elements = document.querySelectorAll("[data-lang-en][data-lang-pt]");

  // Atualiza o conteúdo baseado no idioma atual
  elements.forEach(el => {
      el.textContent = el.getAttribute(`data-lang-${currentLanguage}`);
  });

  // Atualiza o texto do botão
  const button = document.getElementById("languageButton");
  button.textContent = currentLanguage === "en" ? "Portuguese" : "Inglês";
});


const carouselContainer = document.getElementById('carousel-container');
const images = document.querySelectorAll('#carousel-container img');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let idx = 0;

function updateCarousel() {
    const width = images[0].clientWidth; // Largura da imagem
    carouselContainer.style.transform = `translateX(${-idx * width}px)`;
}

function showNextImage() {
    idx++;
    if (idx >= images.length) {
        idx = 0; // Volta para o início
    }
    updateCarousel();
}

function showPrevImage() {
    idx--;
    if (idx < 0) {
        idx = images.length - 1; // Volta para o final
    }
    updateCarousel();
}

// Eventos dos botões
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

// Carrossel automático
setInterval(showNextImage, 10000); // Troca de imagem a cada 10 segundos


// Botão de alternância

// Botão de alternância
const toggleButton = document.getElementById("dark-mode-toggle");
const modeIcon = document.getElementById("mode-icon");

// Função para ativar o modo escuro
function enableDarkMode() {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    modeIcon.textContent = "🌞";  // Ícone de sol no modo escuro
    localStorage.setItem("theme", "dark");  // Salva a preferência no localStorage
}

// Função para ativar o modo claro
function enableLightMode() {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    modeIcon.textContent = "🌙";  // Ícone de lua no modo claro
    localStorage.setItem("theme", "light");  // Salva a preferência no localStorage
}

// Alternar entre modos
toggleButton.addEventListener("click", function() {
    if (document.body.classList.contains("dark-mode")) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});

// Verificar a preferência de tema salva no localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    if (savedTheme === "dark") {
        enableDarkMode();
    } else {
        enableLightMode();
    }
} else {
    // Se não houver preferência salva, iniciar com o modo escuro como padrão
    enableDarkMode();
}





