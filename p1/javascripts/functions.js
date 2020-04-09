// jshint esversion: 7

//Req. 3b Creates a funtion that computes the average value of the array
let arrAvg = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};



//Req. 3c Creates a function that finds largest value in the array
let arrMax = (arr) => {
  max = arr[0];
  arr.forEach(function(item, index, array) {
    if (item > max) {
      max = item;
    }
  });
  return max;
};



//Req. 3d Creates a function that adds together all even values in array
let sumEvens = (arr) => {
  sum = 0;
  for (let i in arr) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
};



//Optional E.C.
function alphaPosition(ch) {
  charUpper = ch.toUpperCase();
  code = charUpper.charCodeAt(0);
  startchar = "A";
  startPlace = startchar.charCodeAt(0) - 1;
  return(code - startPlace);
}
