import { createElement } from '../render';
import { capitalize } from '../utils';

const SORTINGS = [
  {
    name: 'day',
    state: ''
  },
  {
    name: 'event',
    state: 'disabled'
  },
  {
    name: 'time',
    state: ''
  },
  {
    name: 'price',
    state: 'checked'
  },
  {
    name: 'offer',
    state: 'disabled'
  }
];

const getSortingItems = (sorting) => ` <div class="trip-sort__item  trip-sort__item--${sorting.name}">
<input id="sort-${sorting.name}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sorting.name}" ${sorting.state}>
<label class="trip-sort__btn" for="sort-${sorting.name}">${capitalize(sorting.name)}</label>
</div>`;

function createSortingTemplate() {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  ${SORTINGS.map((sorting) => getSortingItems(sorting)).join('')}
  </form>`;
}

export default class SortView {
  getTemplate() {
    return createSortingTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
