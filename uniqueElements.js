const isAbsent = function (index, set) {
  const list = set.slice(0);
  list.splice(index, 1);
  return !list.includes(set[index]);
}

const uniqueElementsSet = function (list, element, index, array) {
  if (isAbsent(index, array)) {
    list.push(element);
  }
  return list;
}

let array = [1, 2, 1, 1, 3];
console.log(array.reduce(uniqueElementsSet, []));
array = [1, 2, 2, 7];
console.log(array.reduce(uniqueElementsSet, []));