import AbstractView from '../framework/view/abstract-view';
import { ListEmptyText } from '../const';

function createNoPointsTemplate(filterType) {
  const listEmptyText = ListEmptyText[filterType];

  return `<p class="trip-events__msg">${listEmptyText}</p>`;
}

export default class NoPointsView extends AbstractView {
  #filter = null;

  constructor({ filter }) {
    super();
    this.#filter = filter;
  }

  get template() {
    return createNoPointsTemplate(this.#filter);
  }
}
