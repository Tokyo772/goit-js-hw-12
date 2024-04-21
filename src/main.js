import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { serviceImage } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const iziRejectOptions = {
  title: '❌',
  titleSize: '24px',
  messageColor: 'white',
  messageSize: '16px',
  backgroundColor: 'rgba(225, 0, 0, 0.3)',
  position: 'topRight',
  timeout: 3000,
};

const elements = {
  form: document.querySelector('.js-form'),
  list: document.querySelector('.js-list'),
  loader: document.querySelector('.js-loader'),
};

elements.form.addEventListener('submit', handlerSearch);

function showLoader() {
  elements.loader.style.display = 'block';
}

function hideLoader() {
  elements.loader.style.display = 'none';
}

hideLoader();

function handlerSearch(evt) {
  evt.preventDefault();
  const userSearch = elements.form.elements.search.value.trim();
  if (userSearch === '') {
    iziToast.show({
      ...iziRejectOptions,
      message: 'Please enter a search term before submitting!',
    });
    return;
  }

  showLoader();

  serviceImage(userSearch)
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error('error');
      }

      elements.list.innerHTML = createMarkup(data.hits);
      lightbox.refresh();
    })
    .catch(err => {
      elements.list.innerHTML = '';
      iziToast.show({
        ...iziRejectOptions,
        message: `Sorry, there are no images matching your search query. Please try again!`,
      });
    })
    .finally(() => {
      hideLoader();
    });
}

const lightbox = new SimpleLightbox('.js-list a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
