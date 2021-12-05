/* eslint-disable no-restricted-globals */

export default function newId(prefix = 'id') {
  let lastId: number = parseInt(localStorage.getItem('lastId') || '5', 10);

  if (isNaN(lastId)) lastId = 4;
  lastId += 1;
  localStorage.setItem('lastId', lastId.toString());
  return `${prefix}${lastId}`;
}
