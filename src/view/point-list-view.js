//import { createElement } from '../render';
import AbstractView from '../framework/view/abstract-view';

function createPointListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class PointListView extends AbstractView{
  get template() {
    return createPointListTemplate();
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
