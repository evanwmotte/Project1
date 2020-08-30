$(document).foundation()
// API call for lat and lon for user address *  ID #addressInput is not added to html yet

$(".searchBtn2").on("click", function() {
event.preventDefault();
var mapAddress = $(".address").val().trim();
var mapApiKey = "0vNJz85K0zDLzjPpKxVQV7kcdfKBGP6W";
var radius = $(".distance").val().trim();
var radius2 = (radius / 0.00062137)
var cravingOrder = $(".menuItems").val().trim();
console.log(mapAddress)
console.log(radius)
console.log(cravingOrder)

var mapUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=${mapApiKey}&inFormat=kvp&outFormat=json&location=${mapAddress}&thumbMaps=false`
console.log(mapUrl)


$.ajax({
  url: mapUrl,
  method: "GET"
}).then(function (response) {
  console.log(response)
  var userLat = response.results[0].locations[0].displayLatLng.lat
  var userLon = response.results[0].locations[0].displayLatLng.lng
  var tomApiKey = "eHGzznMSA8UfAHuJHoE7tt8EZZfZ6oUy"
  var tomUrl = `https://api.tomtom.com/search/2/search/${cravingOrder}.json?countrySet=US&lat=${userLat}&lon=${userLon}&radius=${radius2}&idxSet=POI&categorySet=7315&key=${tomApiKey}`
  var responseIdArray = [];
  console.log(tomUrl)
  
  $.ajax({
    url: tomUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response)
      for (i = 0; i < 5; i++) {
        var placeName = response.results[i].poi.name
        var distanceMet = response.results[i].dist
        var distMilesDisplay = (distanceMet * 0.000621371).toFixed(2) + " miles"
        var phoneNumDisplay = response.results[i].poi.phone
        var urlDisplay = response.results[i].poi.url
        var placeAddress = response.results[i].address.freeformAddress
          $(`.title${i + 5}`).empty()
          $(`.link${i + 5}`).empty()
          $(`.recipe${i + 5}`).empty()
          $(`.title${i + 5}`).append(placeName)
          $(`.link${i + 5}`).attr("href", `${urlDisplay}`)
          $(`.recipe${i + 5}`).append(`<p>${distMilesDisplay} away</p>`)
          $(`.recipe${i + 5}`).append(`<p>Phone Number: ${phoneNumDisplay}</p>`)
          $(`.recipe${i + 5}`).append(`<p>Address: ${placeAddress}</p>`)
          responseIdArray.push(response.results[i].id)
      }      
})
})

})


