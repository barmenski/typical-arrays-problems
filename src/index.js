
exports.min = function min (array) {
  if (!Array.isArray(array)||isFinite(array)){
    return 0;
  } else {
    return Math.min.apply(null, array);
  }
}

exports.max = function max (array) {
  if (!Array.isArray(array)||isFinite(array)){
    return 0;
  } else {
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg (array) {
  if (!Array.isArray(array)||isFinite(array)){
    return 0;
  } else {
    let result=array.reduce(function(sum,current){
      return sum+current;
    },0)
    return result/array.length;
  }
}
