export const arraysToKeyIdObjects = (array, idKey) => (
  array.reduce((acc, arrayItem) => ({ ...acc, [arrayItem[idKey]]: arrayItem }), {})
);

export const updateKeyIdObject = (originalObject, newObject, idKey) => (
  { ...originalObject, [newObject[idKey]]: newObject}
);
