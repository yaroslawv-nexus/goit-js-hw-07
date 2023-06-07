import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    galleryList: document.querySelector(`.gallery`),
}

refs.galleryList.addEventListener(`click`, onClickElementGallery);
refs.galleryList.innerHTML = createMarkImg(galleryItems);
let instance = {};


function createMarkImg(array) {
     return array.map(({preview, original, description}) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    }).join("");
   
}

function onClickElementGallery(event) {
    event.preventDefault();
     if (event.target.nodeName != `IMG`) {
        return;
     }
  const originalImg = event.target.parentNode.href;
  openLightbox(originalImg);
  window.addEventListener(`keydown`, onEscCloseModalWind);

}

function openLightbox(img) {
  instance = basicLightbox.create(`
  <img src="${img}" width="800" height="600">
`);
instance.show();

}

function onEscCloseModalWind(event) {
 if(event.code.toUpperCase() != "ESCAPE") {
  return;
 }
 instance.close();
 window.removeEventListener(`keydown`, onEscCloseModalWind);
}















