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
