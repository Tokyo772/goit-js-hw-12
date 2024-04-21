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

let page = 1;
let currentSearch = null;

const elements = {
  form: document.querySelector('.js-form'),
  list: document.querySelector('.js-list'),
  loader: document.querySelector('.js-loader'),
  btnLoadMore: document.querySelector('.btn-js-load-more'),
};

elements.btnLoadMore.addEventListener('click', handlerLoadMore);
elements.form.addEventListener('submit', handlerSearch);

function showLoader() {
  elements.loader.style.display = 'block';
}

function hideLoader() {
  elements.loader.style.display = 'none';
}

hideLoader();

async function handlerSearch(evt) {
  evt.preventDefault();
  const userSearch = elements.form.elements.search.value.trim();
  if (userSearch === '') {
    iziToast.show({
      ...iziRejectOptions,
      message: 'Please enter a search term before submitting!',
    });
    return;
  }

  currentSearch = userSearch;
  page = 1;

  showLoader();

  try {
    const data = await serviceImage(userSearch);

    if (data.hits.length === 0) {
      elements.list.innerHTML = '';
      iziToast.show({
        ...iziRejectOptions,
        message: `Sorry, there are no images matching your search query. Please try again!`,
      });
      elements.btnLoadMore.classList.replace(
        'btn-load-more',
        'btn-hidden-load-more'
      );
      return;
    }
    elements.list.innerHTML = createMarkup(data.hits);
    lightbox.refresh();
    elements.btnLoadMore.classList.replace(
      'btn-hidden-load-more',
      'btn-load-more'
    );
  } catch {
    elements.list.innerHTML = '';
    iziToast.show({
      ...iziRejectOptions,
      message: `Sorry, there are no images matching your search query. Please try again!`,
    });
  } finally {
    hideLoader();
  }
}

async function handlerLoadMore() {
  showLoader();

  try {
    page += 1;
    const data = await serviceImage(currentSearch, page);
    elements.list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    lightbox.refresh();
  } catch (error) {
    iziToast.show({
      ...iziRejectOptions,
      message: 'Failed to load more images. Please try again!',
    });
  } finally {
    hideLoader();
  }
}

const lightbox = new SimpleLightbox('.js-list a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
