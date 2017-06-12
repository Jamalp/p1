(function() {

  reallySimpleWeather.weather({
    wunderkey: '', // leave blank for Yahoo
    location: 'Los Angeles, CA', //your location 
    woeid: '', // "Where on Earth ID"
    unit: 'f', // 'c' also works
    success: function(weather) {
      let html = weather.temp+'° & ' + weather.currently
      document.getElementById('weather').innerText = html;
    },
    error: function(error) {
      document.getElementById('weather').innerText = '72 & Sunny..probably';
    }
});
}());