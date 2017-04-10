module.exports = function(clinics){

  var partPostCodeArray = [];
  var partPostCodeObj = {results:{}};

  for(var i = 0; i < clinics.result.length; i++){
    partPostCodeArray.push(clinics.result[i].partial_postcode);
  }

  partPostCodeArray.forEach(function(postcode){
    partPostCodeObj.results[postcode] = (partPostCodeObj.results[postcode] || 0) + 1;
  });

  partPostCodeObj['total'] = Object.keys(partPostCodeObj.results).length;

  return partPostCodeObj;

}
