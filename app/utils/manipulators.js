export const arraysToKeyIdObjects = (array, idKey) => (
  array.reduce((acc, arrayItem) => ({ ...acc, [arrayItem[idKey]]: arrayItem }), {})
);

export const updateKeyIdObject = (originalObject, newObject, idKey) => (
  { ...originalObject, [newObject[idKey]]: newObject}
);

export const updateItemInArray = (originalArray, newItem, idKey) => {
  const newArray = originalArray.concat();
  const oldItem = originalArray.find((el) => el[idKey] === newItem[idKey]);
  const oldItemIndex = originalArray.indexOf(odlItem);
  newArray[oldItemIndex] = newItem;

  return oldItemIndex != -1 && newArray || oldArray;
}
