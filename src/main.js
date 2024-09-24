import { RenderPosition, render } from './framework/render.js';
import FilterView from './view/filter-view.js';
import TripInfoView from './view/trip-info-view.js';
//import { RenderPosition, render } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointModel from './model/point-model.js';

const mainContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');

const pointModel = new PointModel();
const boardPresenter = new BoardPresenter({
  pointsContainer: pointsContainer,
  pointModel,
});

render(new TripInfoView(), mainContainer, RenderPosition.AFTERBEGIN);
render(new FilterView(), filtersContainer);

boardPresenter.init();
