function merge(arr1, arr2) {
  const result = [];
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1.length === 0 || arr1[0] > arr2[0]) {
      result.push(arr2.shift())
    } else if (arr2.length === 0 || arr1[0] <= arr2[0]) {
      result.push(arr1.shift())
    }
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // while(arr.length > 1) {
  const middleIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, middleIndex);
  let right = arr.slice(middleIndex);
  // }
  left = mergeSort(left)
  right = mergeSort(right)

  return merge(left, right)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
