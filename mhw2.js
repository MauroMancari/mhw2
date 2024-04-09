/* DICHIARAZIONI COSTANTI */
const RIGHT_ARROW = 'img/forward-arrow.png';
const DOWN_ARROW = 'img/down-arrow.png';
const IMAGES = [
    'img/sfondo2.jpg',
    'img/sfondo3.jpg',
    'img/sfondo4.jpg',
    'img/sfondo5.jpg',
    'img/sfondo6.jpg'
];

/* IMPLEMENTAZIONI FUNZIONI */
function visualizzaDettagli(event){
    const content = document.querySelector('.content');
    const image = event.currentTarget.querySelector('img');
    const text = event.currentTarget.querySelector('span');

    isVisible = !isVisible;
    if(isVisible){
        content.classList.remove('hidden');
        image.src = DOWN_ARROW;
        text.textContent = 'Nascondi dettagli';
    }else{
        content.classList.add('hidden');
        image.src = RIGHT_ARROW;
        text.textContent = 'Visualizza dettagli';
    }
}

function forwardImages(event){
    const section = document.querySelector('.section-img');
    const image = document.createElement('img');

    console.log('Hai cliccato avanti');

    if(i < IMAGES.length - 1){
        i++;
    }
    else{
        i = 0;
    }

    image.src = IMAGES[i];    
    section.innerHTML = '';
    section.appendChild(image);
}

function backImages(event){
    const section = document.querySelector('.section-img');
    const image = document.createElement('img');

    console.log('Hai cliccato indietro');

    if(i === 0){
        i = IMAGES.length - 1;
    }else{
        i--;
    }
    image.src = IMAGES[i];    
    section.innerHTML = '';
    section.appendChild(image);
}

function createImage(src){
    const image = document.createElement('img');

    image.src = src;
    return image;
}

function onImageClick(event){
    console.log('Hai cliccato l immagine');
    const image = createImage(event.currentTarget.src);

    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
}

function onModalClick(){
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
}

function changeFavorite(event){
    const pref = event.currentTarget;
    const title1 = document.createElement('h3');
    const title2 = document.createElement('h4');
    const button = document.createElement('button');

    pref.classList.add('preferito');
    button.classList.add('reset');
    pref.innerHTML = '';

    title1.textContent = "Con doppio click hai attivato la classe preferito";
    title2.textContent = "Clicca sul bottone per resettare tutto come prima!";
    button.textContent = 'Cliccami';
        
    pref.appendChild(title1);
    pref.appendChild(title2);
    pref.appendChild(button);
    
    button.addEventListener('click', resetButton);
}

function resetButton(){
    preferito.innerHTML = '';
    preferito.classList.remove('preferito');

    preferito.appendChild(cover);
    preferito.appendChild(caption);
    preferito.appendChild(price);
}

function addEffects(event){
    const effects = event.currentTarget;
    
    isOver = !isOver;
    if(isOver){
        if(effects.dataset.name === 'one'){
            effects.classList.add('noName');
        }
    }else{
        effects.classList.remove('noName');
    }
}


/* DICHIARAZIONI GENERALI */
let isVisible = false;
let isOver = false;
let i = 0;

const details = document.querySelector('.show-details');
details.addEventListener('mouseover', visualizzaDettagli);

const forwardButton = document.querySelector('#avanti');
const backButton = document.querySelector('#indietro');

forwardButton.addEventListener('click', forwardImages);
backButton.addEventListener('click', backImages);

const sliderImage = document.querySelectorAll('.mdl-img');
for(let items of sliderImage){
    items.addEventListener('click', onImageClick);
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);

const preferito = document.querySelector('.pref');

const cover = preferito.querySelector('.slider-img');
const caption = preferito.querySelector('.caption');
const price = preferito.querySelector('.prezzo');

preferito.addEventListener('dblclick', changeFavorite);
preferito.addEventListener('touchstart', changeFavorite); //L'HO IMPLEMENTATO PER LA VERSIONE MOBILE

const effects = document.querySelectorAll('.underline');

for(let efx of effects){
    efx.addEventListener('mouseover', addEffects);
}