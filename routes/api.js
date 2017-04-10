const express =  require('express');
const router = express.Router();

const request = require('request');
const healthCheckApi = require('health-check-api');

const jsonIterate = require('../lib/formatClinics');

router.get('/clinics/city/:name', function(req, res){

  request('https://data.gov.uk/data/api/service/health/clinics?city='
  + req.params.name, function(error, response, body){
    if (error) {
      console.log(error);
    } else {
    var clinics = JSON.parse(body);
    res.send(jsonIterate(clinics));
    }
  });
});


router.get('/healthcheck', function(req, res){

healthCheckApi.do([
  {
    url: 'https://data.gov.uk/data/api/service/health/clinics',
    method: 'GET',
    expectedStatusCode: 200
  }])
   .then(function(result){
      res.send(result);
   })
   .catch(function(error){
      console.log(error);
   });

});


module.exports = router;
