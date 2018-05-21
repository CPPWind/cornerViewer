// return an array rotated n steps
export const rotate = (arr, n) => {
  if (arr.length === 0 || arr.length === n) {
    return arr;
  }
  return arr.slice(n).concat(arr.slice(0, n));
};

// simple function to get the next element in the array arr
// Additionally this wraps around so that for
//    arr = ['a','b','c']
//    nextIn(arr,0) # arr[1] = 'b'
//    nextIn(arr,1) # arr[2] = 'c'
//    nextIn(arr,2) # arr[3] == arr[0] = 'a'
//    nextIn(arr,6) # arr[7] == arr[1] = 'b'
export const nextIn = (arr, current) => {
  return arr[(current + 1) % arr.length];
};
