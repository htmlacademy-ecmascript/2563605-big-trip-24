//import { createElement } from '../render';
import { capitalize } from '../utils';
import AbstractView from '../framework/view/abstract-view';

const FILTERS = [
  {
    name: 'everything',
    state: ''
  },
  {
    name: 'future',
    state: ''
  },
  {
    name: 'present',
    state: ''
  },
  {
    name: 'past',
    state: 'checked'
  }
];

const getFiltersItem = (filter) => `<div class="trip-filters__filter">
<input id="filter-${filter.name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.name}" ${filter.state}>
<label class="trip-filters__filter-label" for="filter-${filter.name}">${capitalize(filter.name)}</label>
</div>`;

function createFiltersTemplate() {
  return `<form class="trip-filters" action="#" method="get">
  ${FILTERS.map((filter) => getFiltersItem(filter)).join('')}
  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
}

export default class FilterView extends AbstractView {
  get template() {
    return createFiltersTemplate();
  }

  // getElement() {
  //   if (!this.element) {
  //     this.element = createElement(this.getTemplate());
  //   }

  //   return this.element;
  // }

  // removeElement() {
  //   this.element = null;
  // }
}
