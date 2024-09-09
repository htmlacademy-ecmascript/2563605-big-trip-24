import NewFilters from './view/filter-view.js';
import NewTripInfo from './view/board-view.js';
import { RenderPosition, render } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const mainContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({pointsContainer: pointsContainer});

render(new NewTripInfo(), mainContainer, RenderPosition.AFTERBEGIN);
render(new NewFilters(), filtersContainer);

boardPresenter.init();
