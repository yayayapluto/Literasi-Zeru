function cardPPLG() {
    const container = document.createElement('div');
    container.classList.add('d-flex', 'flex-row', 'flex-wrap', 'flex-md-nowrap');

    for (let a = 1; a <= 4; a++) {
        const card = document.createElement('div');
        card.classList.add('card', 'p-2', 'mx-1', 'flex-grow-1', 'my-1', 'my-1');
        const linkTo = document.createElement('a')
        linkTo.setAttribute('href', `../Kelas/PPLG/X_PPLG_${a}/index.html`)
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-dark','text-class-addon');
        cardBody.textContent = `X PPLG ${a}`;
        card.appendChild(cardBody);
        linkTo.appendChild(card)
        container.appendChild(linkTo);
    }

    const parentElement = document.getElementById('parentContainer');

    parentElement.innerHTML = '';

    parentElement.appendChild(container);
}

function cardTJKT() {
    const container = document.createElement('div');
    container.classList.add('d-flex', 'flex-row', 'flex-wrap', 'flex-md-nowrap');

    for (let a = 1; a <= 3; a++) {
        const card = document.createElement('div');
        card.classList.add('card', 'p-2', 'mx-1', 'flex-grow-1', 'my-1');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-dark','text-class-addon');
        cardBody.textContent = `X TJKT ${a}`;
        card.appendChild(cardBody);
        container.appendChild(card);
    }

    const parentElement = document.getElementById('parentContainer');

    parentElement.innerHTML = '';

    parentElement.appendChild(container);
}

function cardANIMASI() {
    const container = document.createElement('div');
    container.classList.add('d-flex', 'flex-row', 'flex-wrap', 'flex-md-nowrap');

    for (let a = 1; a <= 3; a++) {
        const card = document.createElement('div');
        card.classList.add('card', 'p-2', 'mx-1', 'flex-grow-1', 'my-1', 'card-animasi');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-dark','text-class-addon');
        cardBody.textContent = `X ANIMASI ${a}`;
        card.appendChild(cardBody);
        container.appendChild(card);
    }

    const parentElement = document.getElementById('parentContainer');

    parentElement.innerHTML = '';

    parentElement.appendChild(container);
}

function cardBRF() {
    const container = document.createElement('div');
    container.classList.add('d-flex', 'flex-row', 'flex-wrap', 'flex-md-nowrap');

    for (let a = 1; a <= 2; a++) {
        const card = document.createElement('div');
        card.classList.add('card', 'p-2', 'mx-1', 'flex-grow-1', 'my-1');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-dark','text-class-addon');
        cardBody.textContent = `X BRF ${a}`;
        card.appendChild(cardBody);
        container.appendChild(card);
    }

    const parentElement = document.getElementById('parentContainer');

    parentElement.innerHTML = '';

    parentElement.appendChild(container);
}

function cardTE() {
    const container = document.createElement('div');
    container.classList.add('d-flex', 'flex-row', 'flex-wrap', 'flex-md-nowrap');

    const card = document.createElement('div');
    card.classList.add('card', 'p-2', 'mx-1', 'flex-grow-1', 'my-1');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'text-dark','text-class-addon');
    cardBody.textContent = "X TE";
    card.appendChild(cardBody);
    container.appendChild(card);

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