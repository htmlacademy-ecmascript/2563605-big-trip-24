import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const humanizePointDate = (pointDate, dateFormat) => pointDate ? dayjs(pointDate).format(dateFormat) : '';

const getPointDuration = (pointDateFrom, pointDateTo) => {
  const humatizedDateFrom = dayjs(pointDateFrom);
  const humatizedDateTo = dayjs(pointDateTo);

  const pointDuration = dayjs.duration(humatizedDateTo.diff(humatizedDateFrom));

  if (pointDuration.months() > 0 || pointDuration.years() > 0) {
    const days = Math.floor(pointDuration.asDays());
    return pointDuration.format(`${days}[D] HH[H] mm[M]`);
  }

  if (pointDuration.days() > 0) {
    return pointDuration.format('DD[D] HH[H] mm[M]');
  }

  if (pointDuration.hours() > 0) {
    return pointDuration.format('HH[H] mm[M]');
  }

  return pointDuration.format('mm[M]');
};

function getWeightForPrice(a, b) {
  if (a.basePrice < b.basePrice) {
    return 1;
  }

  if (a.basePrice > b.basePrice) {
    return -1;
  }

  if (a.basePrice === b.basePrice) {
    return 0;
  }
}

function getWeightForTime(pointA, pointB) {
  const pointADuration = dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
  const pointBDuration = dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom));

  if (pointADuration < pointBDuration) {
    return 1;
  }

  if (pointADuration > pointBDuration) {
    return -1;
  }

  if (pointADuration === pointBDuration) {
    return 0;
  }
}

function getWeigthForDay(a, b) {
  if (a.dateFrom > b.dateFrom) {
    return 1;
  }

  if (a.dateFrom < b.dateFrom) {
    return -1;
  }

  if (a.dateFrom === b.dateFrom) {
    return 0;
  }
}

const getOffersByType = (type, offers) => offers.find((offer) => offer.type === type).offers;

const getDestinationId = (destinationName, destinations) => destinations.find((destinationElement) => destinationElement.name === destinationName).id;

export { humanizePointDate, getPointDuration, getWeightForPrice, getWeightForTime, getWeigthForDay, getOffersByType, getDestinationId };
