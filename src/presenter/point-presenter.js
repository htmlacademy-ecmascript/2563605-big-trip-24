import { render, replace, remove } from '../framework/render';
import PointView from '../view/point-view';
import EditPointView from '../view/edit-point-view';
import { UpdateType, UserAction} from '../const';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDIT: 'EDIT'
};

export default class PointPresenter {
  #point = null;
  #destinations = null;
  #offers = null;

  #pointComponent = null;
  #editPointComponent = null;

  #pointsListComponent = null;
  #handleModelEvent = null;
  #handleModeChange = null;
  #clearPoint = null;
  #resetPointView = null;
  #handleModelUpdate = null;
  #mode = Mode.DEFAULT;

  constructor({ pointsListComponent, onPointsChange, onModeChange, onPointClear, onEditPointView, onModelUpdate }) {
    this.#pointsListComponent = pointsListComponent;
    this.#handleModelEvent = onPointsChange;
    this.#handleModeChange = onModeChange;
    this.#clearPoint = onPointClear;
    this.#resetPointView = onEditPointView;
    this.#handleModelUpdate = onModelUpdate;
  }

  init(point, offers, destinations) {
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;

    const prevPointComponent = this.#pointComponent;
    const prevEditPointComponent = this.#editPointComponent;

    this.#pointComponent = new PointView({
      point: this.#point,
      offers: this.#offers,
      destinations: this.#destinations,
      onEditClick: () => {
        this.#replacePointToForm();
      },
      onFavoriteClick: this.#handleFavoriteClick
    });

    this.#editPointComponent = new EditPointView({
      point: this.#point,
      offers: this.#offers,
      destinations: this.#destinations,
      onEditClick: this.#handleFormEditClick,
      onFormSaveClick: this.#handleFormSaveClick,
      onFormDeleteClick: this.#handleFormDeleteClick,
      isNewPoint: false,
    });

    if (prevPointComponent === null || prevEditPointComponent === null) {
      render(this.#pointComponent, this.#pointsListComponent);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDIT) {
      replace(this.#editPointComponent, prevEditPointComponent);
    }

    remove(prevPointComponent);
    remove(prevEditPointComponent);
  }

  #replacePointToForm() {
    replace(this.#editPointComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDIT;
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#editPointComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  destroy(){
    remove(this.#pointComponent);
    remove(this.#editPointComponent);
  }

  resetView(){
    if (this.#mode !== Mode.DEFAULT){
      this.#editPointComponent.reset(this.#point);
      this.#replaceFormToPoint();
    }
  }

  #handleFavoriteClick = () => {
    this.#handleModelEvent(UpdateType.PATCH, { ...this.#point, isFavorite: !this.#point.isFavorite });
  };

  #handleFormSaveClick = (point) => {
    this.#handleModelUpdate(UserAction.UPDATE_POINT, UpdateType.PATCH, point);
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleFormDeleteClick = (point) => {
    this.#clearPoint(point);
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleFormEditClick = (point) => {
    this.#resetPointView(point);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };
}
