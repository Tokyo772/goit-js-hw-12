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
let totalPages;

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

function removeLoadMoreBtn() {
  elements.btnLoadMore.classList.add('hidden');
}

function addLoadMoreBtn() {
  elements.btnLoadMore.classList.remove('hidden');
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
    const data = await serviceImage(userSearch, page);
    elements.list.innerHTML = data.hits.length ? createMarkup(data.hits) : '';
    lightbox.refresh();
    totalPages = Math.ceil(data.totalHits / data.hits.length);

    if (page >= totalPages) {
      removeLoadMoreBtn();
    } else {
      addLoadMoreBtn();
    }

    if (data.hits.length === 0) {
      iziToast.show({
        ...iziRejectOptions,
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      removeLoadMoreBtn();
    }
  } catch (error) {
    elements.list.innerHTML = '';
    iziToast.show({
      ...iziRejectOptions,
      message: `Sorry, there was an error fetching the images. Please try again!`,
    });
  } finally {
    hideLoader();
  }
}

async function handlerLoadMore() {
  page += 1;
  showLoader();
  removeLoadMoreBtn();

  try {
    const data = await serviceImage(currentSearch, page);
    if (data.hits.length > 0) {
      elements.list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
      lightbox.refresh();

      const { height: cardHeight } =
        elements.list.firstElementChild.getBoundingClientRect();
      window.scrollBy({ top: cardHeight * 3, behavior: 'smooth' });
    }

    if (page >= totalPages) {
      iziToast.show({
        ...iziRejectOptions,
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      addLoadMoreBtn();
    }
  } catch (error) {
    iziToast.show({
      ...iziRejectOptions,
      message: "We're sorry, but you've reached the end of search results.",
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
