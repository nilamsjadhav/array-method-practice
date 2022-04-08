const isAbsentEarlier = function (index, array) {
  return !array.slice(0, index).includes(array[index]);
}

const set = function (list, element, index, array) {
  if (isAbsentEarlier(index, array)) {
    list.push(element);
  }
  return list;
}

let array = [1, 2, 1, 1, 3];
console.log(array.reduce(set, []));
array = [1, 2, 2, 7];
console.log(array.reduce(set, []));