function cardPPLG() {
    const container = document.createElement('div');
    container.classList.add('d-flex', 'flex-row');

    const card1 = document.createElement('div');
    card1.classList.add('card', 'p-2', 'mx-1');
    const cardBody1 = document.createElement('div');
    cardBody1.classList.add('card-body', 'text-dark','text-class-addon');
    cardBody1.textContent = "X PPLG 1";
    card1.appendChild(cardBody1);
    container.appendChild(card1);

    const card2 = document.createElement('div');
    card2.classList.add('card', 'p-2', 'mx-1');
    const cardBody2 = document.createElement('div');
    cardBody2.classList.add('card-body', 'text-dark','text-class-addon');
    cardBody2.textContent = "X PPLG 2";
    card2.appendChild(cardBody2);
    container.appendChild(card2);

    const card3 = document.createElement('div');
    card3.classList.add('card', 'p-2', 'mx-1');
    const cardBody3 = document.createElement('div');
    cardBody3.classList.add('card-body', 'text-dark','text-class-addon');
    cardBody3.textContent = "X PPLG 3";
    card3.appendChild(cardBody3);
    container.appendChild(card3);

    const card4 = document.createElement('div');
    card4.classList.add('card', 'p-2', 'mx-1');
    const cardBody4 = document.createElement('div');
    cardBody4.classList.add('card-body', 'text-dark','text-class-addon');
    cardBody4.textContent = "X PPLG 4";
    card4.appendChild(cardBody4);
    container.appendChild(card4);

    const parentElement = document.getElementById('parentContainer');

    parentElement.innerHTML = '';

    parentElement.appendChild(container);
}

function cardTJKT() {
    const container = document.createElement('div');
    container.classList.add('d-flex', 'flex-row');

    const card1 = document.createElement('div');
    card1.classList.add('card', 'p-2', 'mx-1');
    const cardBody1 = document.createElement('div');
    cardBody1.classList.add('card-body', 'text-dark','text-class-addon');
    cardBody1.textContent = "X TJKT 1";
    card1.appendChild(cardBody1);
    container.appendChild(card1);

    const card2 = document.createElement('div');
    card2.classList.add('card', 'p-2', 'mx-1');
    const cardBody2 = document.createElement('div');
    cardBody2.classList.add('card-body', 'text-dark','text-class-addon');
    cardBody2.textContent = "X TJKT 2";
    card2.appendChild(cardBody2);
    container.appendChild(card2);

    const card3 = document.createElement('div');
    card3.classList.add('card', 'p-2', 'mx-1');
    const cardBody3 = document.createElement('div');
    cardBody3.classList.add('card-body', 'text-dark','text-class-addon');
    cardBody3.textContent = "X TJKT 3";
    card3.appendChild(cardBody3);
    container.appendChild(card3);

    const parentElement = document.getElementById('parentContainer');

    parentElement.innerHTML = '';

    parentElement.appendChild(container);
}

function cardANIMASI() {
    const container = document.createElement('div');
    container.classList.add('d-flex', 'flex-row');

    const card1 = document.createElement('div');
    card1.classList.add('card', 'p-2', 'mx-1');
    const cardBody1 = document.createElement('div');
    cardBody1.classList.add('card-body', 'text-dark','text-class-addon');
    cardBody1.textContent = "X ANIMASI 1";
    card1.appendChild(cardBody1);
    container.appendChild(card1);

    const card2 = document.createElement('div');
    card2.classList.add('card', 'p-2', 'mx-1');
    const cardBody2 = document.createElement('div');
    cardBody2.classList.add('card-body', 'text-dark','text-class-addon');
    cardBody2.textContent = "X ANIMASI 2";
    card2.appendChild(cardBody2);
    container.appendChild(card2);

    const card3 = document.createElement('div');
    card3.classList.add('card', 'p-2', 'mx-1');
    const cardBody3 = document.createElement('div');
    cardBody3.classList.add('card-body', 'text-dark','text-class-addon');
    cardBody3.textContent = "X ANIMASI 3";
    card3.appendChild(cardBody3);
    container.appendChild(card3);

    const parentElement = document.getElementById('parentContainer');

    parentElement.innerHTML = '';

    parentElement.appendChild(container);
}

function cardBRF() {
    const container = document.createElement('div');
    container.classList.add('d-flex', 'flex-row');

    const card1 = document.createElement('div');
    card1.classList.add('card', 'p-2', 'mx-1');
    const cardBody1 = document.createElement('div');
    cardBody1.classList.add('card-body', 'text-dark','text-class-addon');
    cardBody1.textContent = "X BRF 1";
    card1.appendChild(cardBody1);
    container.appendChild(card1);

    const card2 = document.createElement('div');
    card2.classList.add('card', 'p-2', 'mx-1');
    const cardBody2 = document.createElement('div');
    cardBody2.classList.add('card-body', 'text-dark','text-class-addon');
    cardBody2.textContent = "X BRF 2";
    card2.appendChild(cardBody2);
    container.appendChild(card2);

    const parentElement = document.getElementById('parentContainer');

    parentElement.innerHTML = '';

    parentElement.appendChild(container);
}

function cardTE() {
    const container = document.createElement('div');
    container.classList.add('d-flex', 'flex-row');

    const card1 = document.createElement('div');
    card1.classList.add('card', 'p-2', 'mx-1');
    const cardBody1 = document.createElement('div');
    cardBody1.classList.add('card-body', 'text-dark','text-class-addon');
    cardBody1.textContent = "X TE 1";
    card1.appendChild(cardBody1);
    container.appendChild(card1);

    const parentElement = document.getElementById('parentContainer');

    parentElement.innerHTML = '';

    parentElement.appendChild(container);
}

function updateActiveCarouselItemId() {
    const activeCarouselItem = document.querySelector('.carousel-item.active');
    const activeCarouselItemId = activeCarouselItem ? activeCarouselItem.id : null;
    switch (activeCarouselItemId) {
        case "pplg":
            cardPPLG()
            break;
    
        case "tjkt":
            cardTJKT()
            break;
    
        case "animasi":
            cardANIMASI()
            break;
    
        case "brf":
            cardBRF()
            break;
    
        case "te":
            cardTE()
            break;
    
        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const myCarousel = document.getElementById('carouselWithControls');
    myCarousel.addEventListener('slid.bs.carousel', updateActiveCarouselItemId);
    updateActiveCarouselItemId()
});