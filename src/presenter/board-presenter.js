import PointListView from '../view/point-list-view.js';
import EditPoint from '../view/edit-point-view.js';
import AddPoint from '../view/add-point-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import { render } from '../render.js';

export default class MainPresenter {
  pointsListComponent = new PointListView();

  constructor({pointsContainer}) {
    this.pointsContainer = pointsContainer;
  }

  init() {
    render(new SortView(), this.pointsContainer);
    render(this.pointsListComponent, this.pointsContainer);
    render(new EditPoint(), this.pointsListComponent.getElement());
    render(new AddPoint(), this.pointsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointsListComponent.getElement());
    }
  }
}
