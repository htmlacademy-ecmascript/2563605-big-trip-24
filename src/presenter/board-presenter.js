import PointListView from '../view/point-list-view';
import EditPointView from '../view/edit-point-view';
import AddPointView from '../view/add-point-view';
import PointView from '../view/point-view';
import SortView from '../view/sort-view';
import { render } from '../render';

export default class BoardPresenter {
  pointsListComponent = new PointListView();

  constructor({pointsContainer, pointModel}) {
    this.pointsContainer = pointsContainer;
    this.pointModel = pointModel;
  }

  init() {
    this.points = [...this.pointModel.getPoints()];
    this.destinations = [...this.pointModel.getDestinations()];
    this.offers = [...this.pointModel.getOffers()];

    render(new SortView(), this.pointsContainer);
    render(this.pointsListComponent, this.pointsContainer);
    render(new EditPointView({point: this.points[0], offers: this.offers, destinations: this.destinations}), this.pointsListComponent.getElement());
    render(new AddPointView(), this.pointsListComponent.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new PointView({point: this.points[i], offers: this.offers, destinations: this.destinations}), this.pointsListComponent.getElement());
    }
  }
}
