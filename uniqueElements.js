const isAbsent = function (index, set) {
  const list = set.slice(0);
  list.splice(index, 1);
  return !list.includes(set[index]);
}

const uniqueElements = function (list, element, index, array) {
  if (isAbsent(index, array)) {
    list.push(element);
  }
  return list;
}

const uniqueSet = function(array) {
  return array.reduce(uniqueElements, [])
}

let array = [1, 2, 1, 1, 3];
console.log('[1, 2, 1, 1, 3] ->', uniqueSet(array));
array = [1, 2, 2, 7];
console.log('[1, 2, 2, 7] ->', uniqueSet(array));
