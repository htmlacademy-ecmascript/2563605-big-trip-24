import { RenderPosition, render } from './framework/render.js';
import FilterView from './view/filter-view.js';
import TripInfoView from './view/trip-info-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointModel from './model/point-model.js';
import { generateFilter } from './mock/filter-mock';

const mainContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');

const pointModel = new PointModel();
const boardPresenter = new BoardPresenter({
  pointsContainer: pointsContainer,
  pointModel,
});

const filters = generateFilter(pointModel.points);

render(new TripInfoView(), mainContainer, RenderPosition.AFTERBEGIN);
render(new FilterView({filters}), filtersContainer);

boardPresenter.init();
