const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url:`https://api.darksky.net/forecast/0d10ad3dffbbe58440a2d1cf8e2b9d75/${lat}, ${lng}`,
    json: true
  },(error, response, body) => {
    // if (!error && response.statusCode === 200){
    //    console.log(body.currently.temperature);
    // } else {
    //    console.log('Unable to fetch weather.');
    // }
    if(error){
      callback('Unable to connect to Forecast.io server.');
      //console.log('Unable to connect to Forecast.io server.');
    } else if(response.statusCode === 400){
      callback('Unable to fetch weather.');
      //console.log('Unable to fetch weather.');
    } else if (response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
      //console.log(body.currently.temperature);
    }
  });
};

module.exports.getWeather = getWeather;
