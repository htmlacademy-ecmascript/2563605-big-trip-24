import { render, replace, remove } from '../framework/render';
import FiltersView from '../view/filter-view';
import { UpdateType } from '../const';
import { filter } from '../view/utils/filter';

export default class FiltersPresenter {
  #filtersModel = null;
  #filtersComponent = null;
  #filtersContainer = null;
  #pointModel = null;

  constructor({ filtersContainer, pointModel, filtersModel }) {
    this.#filtersContainer = filtersContainer;
    this.#pointModel = pointModel;
    this.#filtersModel = filtersModel;

    this.#pointModel.addObserver(this.#handleModelEvent);
    this.#filtersModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    const points = this.#pointModel.points;

    return Object.entries(filter).map(
      ([filterType, filterPoints]) => ({
        type: filterType,
        count: filterPoints(points).length,
      }),
    );
  }

  init() {
    const prevFiltersComponent = this.#filtersComponent;

    this.#filtersComponent = new FiltersView({
      filters: this.filters,
      onFiltersChange: this.#handleFiltersChange,
      currentFilter: this.#filtersModel.filter,
    });

    if (prevFiltersComponent === null) {
      render(this.#filtersComponent, this.#filtersContainer);
      return;
    }

    replace(this.#filtersComponent, prevFiltersComponent);
    remove(prevFiltersComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #handleFiltersChange = (filterType) => {
    if (this.#filtersModel.filter === filterType) {
      return;
    }

    this.#filtersModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
