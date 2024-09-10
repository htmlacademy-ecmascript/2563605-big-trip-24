import Filter from './view/filter-view.js';
import TripInfo from './view/trip-info-view.js';
import { RenderPosition, render } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const mainContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({pointsContainer: pointsContainer});

render(new TripInfo(), mainContainer, RenderPosition.AFTERBEGIN);
render(new Filter(), filtersContainer);

boardPresenter.init();
