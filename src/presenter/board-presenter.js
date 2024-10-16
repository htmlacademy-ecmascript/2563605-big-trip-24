import PointListView from '../view/point-list-view';
import SortView from '../view/sort-view';
import NoPointsView from '../view/no-points-view';
import { RenderPosition, remove, render } from '../framework/render';
import PointPresenter from './point-presenter';
import { SortType, UpdateType, UserAction, FilterType } from '../const';
import { getWeightForPrice, getWeightForTime } from '../view/utils/point-utils';
import { filter } from '../view/utils/filter';
import NewPointPresenter from './new-point-presenter';
import LoadingView from '../view/loading-view';

export default class BoardPresenter {
  #pointsListComponent = new PointListView();
  #loadingComponent = new LoadingView();
  #pointsContainer = null;
  #pointModel = null;
  #noPoints = null;
  #filtersModel = null;
  #newPointPresenter = null;
  #pointPresenters = new Map();
  #isLoading = true;

  #sort = null;
  #currentSortType = SortType.DAY;
  #currentFilterType = FilterType.EVERYTHING;

  constructor({ pointsContainer, pointModel, filtersModel, onNewPointCancel }) {
    this.#pointsContainer = pointsContainer;
    this.#pointModel = pointModel;
    this.#filtersModel = filtersModel;

    this.#newPointPresenter = new NewPointPresenter({
      pointsListContainer: this.#pointsListComponent.element,
      onPointAdd: this.#handleViewAction,
      onDestroy: onNewPointCancel,
    });

    this.#pointModel.addObserver(this.#handleModelEvent);
    this.#filtersModel.addObserver(this.#handleModelEvent);
  }

  get filter() {
    return this.#filtersModel.filter;
  }

  get points() {
    this.#currentFilterType = this.filter;
    const points = [...this.#pointModel.points];
    const filteredPoints = filter[this.#currentFilterType](points);

    switch (this.#currentSortType) {
      case SortType.TIME:
        return filteredPoints.sort(getWeightForTime);
      case SortType.PRICE:
        return filteredPoints.sort(getWeightForPrice);
    }
    return filteredPoints;
  }

  get offers() {
    return this.#pointModel.offers;
  }

  get destinations() {
    return this.#pointModel.destinations;
  }

  createPoint() {
    this.#currentSortType = FilterType.DAY;
    this.#filtersModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#newPointPresenter.init(this.offers, this.destinations);
  }

  init() {
    this.#renderSort(this.#currentSortType);
    this.#renderMain();
  }

  #renderMain() {
    render(this.#pointsListComponent, this.#pointsContainer);
    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }
    this.#renderPointsList();
  }

  #renderSort(sortType) {
    this.#sort = new SortView({
      onSortClick: this.#handleSortClick,
      sortType: sortType
    });

    render(this.#sort, this.#pointsContainer, RenderPosition.AFTERBEGIN);
  }

  #renderLoading() {
    render(this.#loadingComponent,this.#pointsContainer);
  }

  #handleSortClick = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearPointsList();
    remove(this.#sort);
    this.#renderSort(this.#currentSortType);
    this.#renderPointsList();
  };

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsListComponent: this.#pointsListComponent.element,
      onPointsChange: this.#handleModelEvent,
      onModeChange: this.#handleModeChange,
      onPointClear: this.#clearPoint,
      onEditPointView: this.#resetPointView,
      onModelUpdate: this.#handleViewAction,
    });

    pointPresenter.init(point, this.offers, this.destinations);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointModel.deletePoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, updatedPoint) => {
    switch (updateType) {
      // - обновить часть списка (например, когда поменялись данные поинта при редактировании)
      case UpdateType.PATCH:
        this.#pointPresenters.get(updatedPoint.id).init(updatedPoint, this.offers, this.destinations);
        break;
      // - обновить список
      case UpdateType.MINOR:
        this.#clearPointsList();
        this.#renderPointsList();
        break;
      // - обновить всю доску (с очисткой фильтров и сортировки)
      case UpdateType.MAJOR:
        this.#clearPointsList({ resetFilters: true, resetSorting: true });
        this.#renderPointsList();
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        this.#renderMain();
        break;
    }
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #resetPointView = (point) => {
    this.#pointPresenters.get(point.id).resetView();
  };

  #renderPointsList() {
    remove(this.#noPoints);

    if (this.points.length === 0) {
      this.#renderNoPoints();
      return;
    }
    for (const point of this.points) {
      this.#renderPoint(point);
    }
  }

  #renderNoPoints() {
    this.#noPoints = new NoPointsView({
      filter: this.#currentFilterType,
    });

    render(this.#noPoints, this.#pointsListComponent.element);
  }

  #clearPointsList({ resetFilters = false, resetSorting = false } = {}) {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
    remove(this.#loadingComponent);
    if (resetFilters) {
      this.#currentFilterType = FilterType.EVERYTHING;
    }

    if (resetSorting) {
      this.#currentSortType = SortType.DAY;
    }
  }

  #clearPoint = (point) => {
    this.#handleViewAction(UserAction.DELETE_POINT, UpdateType.MINOR, point);
  };
}
