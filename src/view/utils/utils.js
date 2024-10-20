const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function updatePoint(points, update) {
  return points.map((point) => point.id === update.id ? update : point);
}

export { capitalize, updatePoint };
