import { RenderPosition, render } from './framework/render.js';
import TripInfoView from './view/trip-info-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointModel from './model/point-model.js';
import FiltersModel from './model/filters-model';
import FiltersPresenter from './presenter/filters-presenter';
import PointsApiService from './points-api-service';

const AUTHORIZATION = 'Basic eo0wdfg2563605ad';
const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';

const mainContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');

const pointModel = new PointModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION),
});
const filtersModel = new FiltersModel();

const boardPresenter = new BoardPresenter({
  pointsContainer,
  mainContainer,
  pointModel,
  filtersModel,
});

const filtersPresenter = new FiltersPresenter({
  filtersContainer: filtersContainer,
  pointModel,
  filtersModel,
});

render(new TripInfoView(), mainContainer, RenderPosition.AFTERBEGIN);

boardPresenter.init();

pointModel.init()
  .finally(() => {
    filtersPresenter.init();
  });
