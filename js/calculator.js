

    

$(".submitBtn1").on("click", function() {
    var calorieCount = $(".input1").val()
    var carbCount = $(".input2").val()
    var proteinCount = $(".input3").val()
    event.preventDefault()
    $(".nutritionalForm").attr("class", "hide")
    $(".nutritionalCounter").removeClass("hide")
    console.log(calorieCount)
    $(".bar1").attr(`aria-valuemax`, `${calorieCount}`)
    var progressCal = $(".bar1").attr(`aria-valuenow`)
    $(".bar4").width(((progressCal / calorieCount).toFixed(2) * 100) + "%")
    $(".bar2").attr(`aria-valuemax`, `${carbCount}`)
    var progressCar = $(".bar2").attr(`aria-valuenow`)
    $(".bar5").width(((progressCar / carbCount).toFixed(2) * 100) + "%")
    $(".bar3").attr(`aria-valuemax`, `${proteinCount}`)
    var progressPro = $(".bar3").attr(`aria-valuenow`)
    $(".bar6").width(((progressPro / proteinCount).toFixed(2) * 100) + "%")
    
})

function progressBars() {
    var totalCal = $(".bar1").attr(`aria-valuemax`)
    var progressCal = $(".bar1").attr(`aria-valuenow`)
    var totalCar = $(".bar2").attr(`aria-valuemax`)
    var progressCar = $(".bar2").attr(`aria-valuenow`)
    var totalPro = $(".bar3").attr(`aria-valuemax`)
    var progressPro = $(".bar3").attr(`aria-valuenow`)
    var max = "100%"
    console.log(progressCal)
    console.log(totalCal)
    
    if (parseInt(progressCal) >= parseInt(totalCal)){
        $(".bar4").width(max)
    } else {
        $(".bar4").width(((progressCal / totalCal).toFixed(2) * 100) + "%")
    }

    if (parseInt(progressCar) >= parseInt(totalCar)){
        $(".bar5").width(max)
    } else {
        $(".bar5").width(((progressCar / totalCar).toFixed(2) * 100) + "%")
    }

    if (parseInt(progressPro) >= parseInt(totalPro)){
        $(".bar6").width(max)
    } else {
        $(".bar6").width(((progressPro / totalPro).toFixed(2) * 100) + "%")
    }
}

$(".updateBtn1").on("click", function() {
    var calUpdate = $(".update1").val()
    var carUpdate = $(".update2").val()
    var proUpdate = $(".update3").val()
    var updatedCal = parseInt($(".bar1").attr(`aria-valuenow`)) + parseInt(calUpdate)
    $(".bar1").attr(`aria-valuenow`, updatedCal)
    var updatedCar = parseInt($(".bar2").attr(`aria-valuenow`)) + parseInt(carUpdate)
    $(".bar2").attr(`aria-valuenow`, updatedCar)
    var updatedPro = parseInt($(".bar3").attr(`aria-valuenow`)) + parseInt(proUpdate)
    $(".bar3").attr(`aria-valuenow`, updatedPro)
    progressBars()
   
})


