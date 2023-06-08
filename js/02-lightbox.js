import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(`.gallery`);
galleryRef.innerHTML = renderGallery(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250,});


function renderGallery(params) {
    return params.map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
    }).join("");
}

console.log(galleryItems);
