import PointListView from '../view/point-list-view';
import EditPointView from '../view/edit-point-view';
import PointView from '../view/point-view';
import SortView from '../view/sort-view';
import NoPointsView from '../view/no-points-view';
import { render, replace } from '../framework/render';

export default class BoardPresenter {
  #pointsListComponent = new PointListView();
  #pointsContainer = null;
  #pointModel = null;
  #points = [];
  #destinations = [];
  #offers = [];

  constructor({ pointsContainer, pointModel }) {
    this.#pointsContainer = pointsContainer;
    this.#pointModel = pointModel;
  }

  init() {
    this.#points = [...this.#pointModel.points];
    this.#destinations = [...this.#pointModel.destinations];
    this.#offers = [...this.#pointModel.offers];

    this.#renderMain();
  }

  #renderMain() {
    render(new SortView(), this.#pointsContainer);
    render(this.#pointsListComponent, this.#pointsContainer);

    if (this.#points.length === 0) {
      render(new NoPointsView(), this.#pointsListComponent.element);
    }

    for (const point of this.#points) {
      this.#renderPointItem(point, this.#offers, this.#destinations);
    }
  }

  #renderPointItem(point, offers, destinations) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point,
      offers,
      destinations,
      onEditClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const editPointComponent = new EditPointView({
      point,
      offers,
      destinations,
      onEditClick: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onFormSaveClick: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replacePointToForm() {
      replace(editPointComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, editPointComponent);
    }

    render(pointComponent, this.#pointsListComponent.element);
  }
}
