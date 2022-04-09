const isAbsentEarlier = function (list, element) {
  if (!list.includes(element)) {
    list.push(element);
  }
  return list;
}

const set = function(array) {
  return array.reduce(isAbsentEarlier, []);
}

let array = [1, 2, 1, 1, 3];
console.log('[1, 2, 1, 1, 3] ->', set(array));
array = [1, 2, 2, 7];
console.log('[1, 2, 2, 7] ->', set(array));
