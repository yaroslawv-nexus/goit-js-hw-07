import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    galleryList: document.querySelector(`.gallery`),
}



refs.galleryList.innerHTML = createMarkImg(galleryItems);
refs.galleryList.addEventListener(`click`, onClickElementGallery);


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
  const instance = basicLightbox.create(`
  <img src="${originalImg}" width="800" height="600">
`)

instance.show()
     
}

















