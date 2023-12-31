import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imageListArr = galleryItems
  .map((image, index) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" data-index=${index} src="${image.preview}" alt="${image.description}"></a></li>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", imageListArr);

gallery.addEventListener("click", showOriginaImg);

function showOriginaImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const selectedImg = e.target.dataset.index;
  const imageUrl = galleryItems[selectedImg].original;

  const instance = basicLightbox.create(`<img src=${imageUrl}>`);

  instance.show();
}
