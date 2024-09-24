import { getPoints } from '../mock/points-mock';
import { getDestinations } from '../mock/destinations-mock';
import { getOffers } from '../mock/offers-mock';

export default class PointModel {
  #points = getPoints();
  #destinations = getDestinations();
  #offers = getOffers();

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }
}
