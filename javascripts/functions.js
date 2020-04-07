// jshint esversion: 6
total = 0;
arrAvg = function(arrList) {
  for (index = 0; index < arrList.length; index++) {
    console.log(arrList[index]);
    total += arrList[index];

}
  return total/arrList.length;
};


arrAvg([2, 3, 5, 7, 9]);



arrMax = function(arrList) {
    max = arrList[0];
    arrList.forEach(function(item, index, array) {
      if (item > max){
        max = item;
      }
    });
    return max;
};


arrMax([6, 2, 4]);



sumEvens = function(arrList){
    sum = 0;
    for (var element of arrList) {
      if (element % 2 == 0) {
        sum += element;
      }
    }
  return sum;
};


console.log(sumEvens([1, 2, 6]));
