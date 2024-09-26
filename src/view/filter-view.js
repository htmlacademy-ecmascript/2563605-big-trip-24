import { capitalize } from './utils/utils';
import AbstractView from '../framework/view/abstract-view';

function getFiltersItem(type, count) {
  return `<div class="trip-filters__filter">
    <input
    id="filter-${type}"
    class="trip-filters__filter-input  visually-hidden"
    type="radio"
    name="trip-filter"
    value="${type}"
    ${type === 'everything' ? 'checked' : ''}
    ${count === 0 ? 'disabled' : 'checked'} >
    <label class="trip-filters__filter-label" for="filter-${type}">${capitalize(type)}</label>
    </div>`;
}

function createFiltersTemplate(filters) {
  return `<form class="trip-filters" action="#" method="get">
  ${Object.values(filters).map((filter) => getFiltersItem(filter.type, filter.count)).join('')}
  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
}

export default class FilterView extends AbstractView {
  #filters = [];

  constructor({ filters }) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}
