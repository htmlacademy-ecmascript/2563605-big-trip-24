import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomIntegerArray = (min, max) => {
  const randomIntegerArray = [];

  while (randomIntegerArray.length !== max) {
    let newElement = getRandomInteger(min, max);
    const result = randomIntegerArray.every((element) => element !== newElement);

    if (result) {
      randomIntegerArray.push(newElement);
    } else {
      newElement = getRandomInteger(min, max);
    }
  }
  return randomIntegerArray;
};

const createIdGenerator = () => {
  let numberId = 0;

  return () => {
    numberId += 1;
    return numberId;
  };
};

const humanizePointDate = (pointDate, dateFormat) => pointDate ? dayjs(pointDate).format(dateFormat) : '';

const getPointDuration = (pointDateFrom, pointDateTo) => {
  const humatizedDateFrom = dayjs(pointDateFrom);
  const humatizedDateTo = dayjs(pointDateTo);

  const pointDuration = dayjs.duration(humatizedDateTo.diff(humatizedDateFrom));

  let result = '';

  if (pointDuration.days() > 0) {
    result = pointDuration.format('DD[D] HH[H] mm[M]');
  } else if (pointDuration.hours() > 0) {
    result = pointDuration.format('HH[H] mm[M]');
  } else {
    result = pointDuration.format('mm[M]');
  }

  return result;
};

export { capitalize, getRandomArrayElement, getRandomInteger, createIdGenerator, humanizePointDate, getPointDuration, getRandomIntegerArray };
