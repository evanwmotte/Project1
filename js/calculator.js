

    var calorieCount = $(".input1").val()
    var carbCount = $(".input2").val()
    var proteinCount = $(".input3").val()

$(".submitBtn1").on("click", function() {
    $(".nutritionalForm").attr("class", "hide")
    $(".nutritionalCounter").removeClass("hide")
    progressBars()
})

function progressBars() {

$(".bar1").attr(`aria-valuemax`, `${calorieCount}`)
var progressCal = $(".bar1").attr(`aria-valuenow`)
$(".bar4").width(((progressCal / calorieCount).toFixed(2) * 100) + "%")
$(".bar2").attr(`aria-valuemax`, `${carbCount}`)
var progressCar = $(".bar2").attr(`aria-valuenow`)
$(".bar5").width(((progressCar / carbCount).toFixed(2) * 100) + "%")
$(".bar3").attr(`aria-valuemax`, `${proteinCount}`)
var progressPro = $(".bar3").attr(`aria-valuenow`)
$(".bar6").width(((progressPro / proteinCount).toFixed(2) * 100) + "%")

}

