$(document).foundation()



$(".searchBtn").on("click", function () {
  event.preventDefault()
  event.stopPropagation()
  var cuisine = $(".cuisine").val().trim()
  var cravings = $(".cravings").val().trim()
  var maxCalories = $("#sliderOutput1").val()
  var maxCarbs = $("#sliderOutput2").val()
  var maxProtein = $("#sliderOutput3").val()
  console.log(cuisine)
  console.log(cravings)

  var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=" + cravings + "&cuisine=" + cuisine +"&maxCalories=" + maxCalories + "&maxCarbs=" + maxCarbs + "&maxProtein=" + maxProtein + "&addRecipeInformation=true&sort=random&apiKey=5accba34b6cd4c4cbe664a6e1e39df48"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    console.log(queryURL)
    for (i = 0; i < 5; i++) {
      var foodID = response.results[i].id
      var steak = response.results[i].title
      var image = response.results[i].image
      var servingSize = response.results[i].servings
      var servingCal = (response.results[i].nutrition[0].amount).toFixed(0)
      var servingCar = (response.results[i].nutrition[2].amount).toFixed(0)
      var servingPro = (response.results[i].nutrition[1].amount).toFixed(0)
      $(`.title${i}`).text(steak)
      $(`.img${i}`).attr("src", `${image}`)
      $(`.recipe${i}`).append(`<h1 class="modalText">Total Servings: ${servingSize}</h1>`)
      $(`.recipe${i}`).append(`<h2 class="modalText ${i}a" calNum${i}="${servingCal}">Calories per Serving: ${servingCal}</h2>`)
      $(`.recipe${i}`).append(`<h3 class="modalText ${i}b" carNum${i}="${servingCar}">Carbs per Serving: ${servingCar}</h3>`)
      $(`.recipe${i}`).append(`<h4 class="modalText ${i}c" proNum${i}="${servingPro}">Protein per Serving: ${servingPro}</h4>`)
    }
  })
})






