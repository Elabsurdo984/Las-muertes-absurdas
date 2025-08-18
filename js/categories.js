// Definición de categorías con sus respectivas muertes
const deathCategories = {
    historicas: [
        'Aplastado por una avalancha de pergaminos antiguos.',
        'Ahogado en una piscina de tinta de pluma.',
        'Desintegrado por un rayo de polvo de biblioteca.',
        'Envenenado por una poción de hierbas medievales.',
        'Atropellado por una carreta de libros de historia.',
        'Chocado por una tormenta de mapas antiguos.',
        'Aplastado por una catapulta de manuscritos.',
        'Tragado por un volcán de cera de velas.',
        'Atascado en un charco de barro histórico.',
        'Desintegrado por un rayo de arena de reloj.'
    ],
    accidentes: [
        'Aplastado por una avalancha de globos de helio.',
        'Atropellado por una montaña de almohadas.',
        'Chocado por una tormenta de peluches.',
        'Atropellado por una avalancha de esferas de gel.',
        'Colisionado con un camión de algodón de azúcar.',
        'Atropellado por una avalancha de alfileres de papel.',
        'Atascado en una avalancha de pelotas de playa.',
        'Atropellado por un carrito de palomitas de maíz.',
        'Atropellado por una máquina de algodón de azúcar descontrolada.',
        'Atropellado por una ola de patatas fritas.'
    ],
    comida: [
        'Ahogado en una piscina de gelatina de fresa.',
        'Tragado por un volcán de chocolate.',
        'Atascado en un charco de chicle.',
        'Envenenado por un batido de ketchup y mostaza.',
        'Encerrado en una burbuja de chicle gigante.',
        'Deslizado y caído en un tobogán de caramelos.',
        'Ahogado en una piscina de yogur griego.',
        'Envenenado por una sopa de chicles.',
        'Golpeado por una lluvia de pasteles.',
        'Ahogado en una piscina de nata.',
        'Atropellado por una avalancha de papas fritas.',
        'Envenenado por un batido de pescado.',
        'Ahogado en una piscina de queso fundido.',
        'Golpeado por una avalancha de galletas.',
        'Chocado por una tormenta de espaguetis.',
        'Envenenado por un batido de brotes de brócoli.',
        'Ahogado en una bañera llena de caramelos.',
        'Envenenado por una sopa de sopa.',
        'Atropellado por una avalancha de bolas de helado.',
        'Chocado por una tormenta de tortas de cumpleaños.',
        'Ahogado en una piscina de manteca de maní.',
        'Atropellado por una avalancha de galletas de la fortuna.',
        'Envenenado por una bebida de queso crema.',
        'Ahogado en un lago de chocolate líquido.',
        'Chocado por una tormenta de pastelillos.',
        'Envenenado por un batido de calabacín.',
        'Ahogado en un charco de malvaviscos derretidos.',
        'Envenenado por una bebida de aceitunas.',
        'Ahogado en una piscina de gelatina de limón.',
        'Aplastado por una avalancha de burritos.',
        'Chocado por una tormenta de malvaviscos.',
        'Envenenado por una bebida de melaza.',
        'Chocado por una tormenta de tiramisú.',
        'Ahogado en un lago de jarabe de arce.',
        'Envenenado por una bebida de cebolla.',
        'Atropellado por una avalancha de bagels.',
        'Chocado por una tormenta de mantequilla de maní.',
        'Aplastado por una ola de crepes.',
        'Envenenado por una bebida de salsa barbacoa.'
    ],
    animales: [
        'Desintegrado por una lluvia de serpientes de goma.',
        'Golpeado por una lluvia de orejas de conejo de peluche.',
        'Atropellado por una manada de unicornios de peluche.',
        'Chocado por una tormenta de plumas de pavo real.',
        'Aplastado por una avalancha de peluches de osos.',
        'Desintegrado por un rayo de pelos de gato.',
        'Ahogado en una piscina de leche de vaca púrpura.',
        'Atropellado por una estampida de hamsters gigantes.',
        'Chocado por una tormenta de escamas de pez dorado.',
        'Aplastado por una ola de lana de oveja arcoíris.'
    ],
    deportes: [
        'Aplastado por una avalancha de pelotas de fútbol.',
        'Atropellado por una bicicleta de ejercicio descontrolada.',
        'Chocado por una tormenta de raquetas de tenis.',
        'Golpeado por una lluvia de pelotas de ping pong.',
        'Aplastado por una ola de colchonetas de yoga.',
        'Desintegrado por un rayo de polvo de magnesio.',
        'Ahogado en una piscina de bebida deportiva.',
        'Atropellado por una avalancha de pesas de gimnasio.',
        'Chocado por una tormenta de silbatos de árbitro.',
        'Aplastado por una montaña de zapatillas deportivas.'
    ],
    tecnologia: [
        'Desintegrado por un rayo de píxeles.',
        'Ahogado en una piscina de cables USB.',
        'Aplastado por una avalancha de teclados.',
        'Atropellado por una ola de ratones de computadora.',
        'Chocado por una tormenta de notificaciones.',
        'Envenenado por una bebida de tinta de impresora.',
        'Atascado en un charco de silicona líquida.',
        'Desintegrado por una lluvia de microchips.',
        'Aplastado por una montaña de teléfonos móviles.',
        'Ahogado en un lago de pantallas LED líquidas.'
    ]
};

// Variable para almacenar la categoría actual
let currentCategory = 'todas';

// Función para inicializar los event listeners de las categorías
function initializeCategories() {
    const categoryButtons = document.querySelectorAll('.category-button');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            selectCategory(category, this);
        });
    });
}

// Función para seleccionar una categoría
function selectCategory(category, buttonElement) {
    // Remover la clase 'selected' de todos los botones
    document.querySelectorAll('.category-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Agregar la clase 'selected' al botón clickeado
    buttonElement.classList.add('selected');
    
    // Actualizar la categoría actual
    currentCategory = category;
    
    // Mostrar feedback visual
    showCategoryFeedback(category);
}

// Función para mostrar feedback visual al seleccionar categoría
function showCategoryFeedback(category) {
    const categoryName = getCategoryDisplayName(category);
    
    // Crear elemento de feedback temporal
    const feedback = document.createElement('div');
    feedback.className = 'category-feedback';
    feedback.textContent = `Categoría seleccionada: ${categoryName}`;
    
    // Agregar estilos inline para el feedback
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--secondary-color);
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        font-size: 0.9rem;
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(feedback);
    
    // Remover el feedback después de 2 segundos
    setTimeout(() => {
        feedback.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (feedback.parentNode) {
                feedback.parentNode.removeChild(feedback);
            }
        }, 300);
    }, 2000);
}

// Función para obtener el nombre de display de la categoría
function getCategoryDisplayName(category) {
    const displayNames = {
        'historicas': 'Muertes Históricas',
        'accidentes': 'Accidentes Absurdos',
        'comida': 'Muertes por Comida',
        'animales': 'Relacionadas con Animales',
        'deportes': 'Deportes Extremos',
        'tecnologia': 'Tecnología Fatal',
        'todas': 'Todas las Categorías'
    };
    
    return displayNames[category] || category;
}

// Función para obtener una muerte aleatoria de la categoría actual
function getRandomDeathFromCategory() {
    if (currentCategory === 'todas') {
        // Si es "todas", usar el array original de deaths.js
        const randomIndex = Math.floor(Math.random() * deaths.length);
        return deaths[randomIndex];
    } else {
        // Si es una categoría específica, usar las muertes de esa categoría
        const categoryDeaths = deathCategories[currentCategory];
        if (categoryDeaths && categoryDeaths.length > 0) {
            const randomIndex = Math.floor(Math.random() * categoryDeaths.length);
            return categoryDeaths[randomIndex];
        } else {
            // Fallback al array original si la categoría no existe
            const randomIndex = Math.floor(Math.random() * deaths.length);
            return deaths[randomIndex];
        }
    }
}

// Agregar estilos CSS para las animaciones del feedback
const categoryStyles = document.createElement('style');
categoryStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .category-feedback {
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }
`;

document.head.appendChild(categoryStyles);

// Inicializar las categorías cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeCategories);
