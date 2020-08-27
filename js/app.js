$(document).foundation()


$(".searchBtn").on("click", function () {
  event.preventDefault()
  var cuisine = $(".cuisine").val().trim()
  var cravings = $(".cravings").val().trim()
  var maxCalories = $("#sliderOutput2").val()
  var maxCarbs = $("#sliderOutput2").val()
  var maxProtein = $("#sliderOutput3").val()
  console.log(cuisine)
  console.log(cravings)


  var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=" + cravings + "&cuisine=" + cuisine + "&maxCalories=" + maxCalories + "&maxCarbs=" + maxCarbs + "&maxProtein=" + maxProtein + "&addRecipeInformation=true&sort=random&apiKey=e703032e7e094173b8b055bd1956b250"

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
      $(`.title${i}`).text(steak)
      $(`.img${i}`).attr("src", `${image}`)
    }

    
    ingredientURL = "https://api.spoonacular.com/recipes/" + foodID + "/ingredientWidget.json?apiKey=e703032e7e094173b8b055bd1956b250"

    $.ajax({
      url: ingredientURL,
      method: "GET"
    }).then(function (response) {
      $(".name").text(response.ingredients[0].name)
      $(".inimg").attr("src", `https://spoonacular.com/cdn/ingredients_100x100/` + `${response.ingredients[0].image}`)
      console.log(response)

    })
    recipeURL = "https://api.spoonacular.com/recipes/" + foodID + "/analyzedInstructions&apiKey=e703032e7e094173b8b055bd1956b250"


    $.ajax({
      url: recipeURL,
      method: "GET"
    }).then(function (response) {

    })
    

  })
}
)





