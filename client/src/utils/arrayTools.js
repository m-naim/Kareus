const updateObjInNastedArray = (array, id, updates) => {
  const updated = array;
  const objIndex = array.findIndex(((Item) => Item.id === id));
  updated[objIndex] = { ...updated[objIndex], ...updates };
  return updated;
};

export default updateObjInNastedArray;
