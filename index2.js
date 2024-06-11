const mergeList = (list) => {
  if (list.length === 0 || list.every((sublist) => sublist.length === 0))
    return [];

  const newList = [];
  for (const val of list) {
    newList.push(...val);
  }

  newList.sort((a, b) => a - b);
  return newList;
};

let lists1 = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

console.log({ newList1: mergeList(lists1) });

let lists2 = [];

console.log({ newList2: mergeList(lists2) });

let lists3 = [[]];

console.log({ newList3: mergeList(lists3) });
