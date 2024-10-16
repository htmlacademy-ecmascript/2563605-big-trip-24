import { RenderPosition, render } from './framework/render.js';
import TripInfoView from './view/trip-info-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointModel from './model/point-model.js';
import FiltersModel from './model/filters-model';
import FiltersPresenter from './presenter/filters-presenter';
import AddNewPointButtonView from './view/add-new-point-button-view';

const mainContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');

const pointModel = new PointModel();
const filtersModel = new FiltersModel();
const addNewPointButton = new AddNewPointButtonView({
  onClick: onNewPointButtonClick,
});
const boardPresenter = new BoardPresenter({
  pointsContainer: pointsContainer,
  pointModel,
  filtersModel,
  onNewPointCancel: cancelNewPoint,
});
const filtersPresenter = new FiltersPresenter({
  filtersContainer: filtersContainer,
  pointModel,
  filtersModel,
});

render(new TripInfoView(), mainContainer, RenderPosition.AFTERBEGIN);
render(addNewPointButton, mainContainer);

function onNewPointButtonClick() {
  boardPresenter.createPoint();
  addNewPointButton.element.disabled = true;
}

function cancelNewPoint() {
  addNewPointButton.element.disabled = false;
}

filtersPresenter.init();
boardPresenter.init();
