

    

$(".submitBtn1").on("click", function() {
    event.preventDefault()
    event.stopPropagation()
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

    var calColor = (parseInt(progressCal) / parseInt(totalCal)).toFixed(2)
    if (calColor <= .5) {
        $(".bar1").addClass("success")
    } else if (calColor >.5 && calColor<= .75) {
        $(".bar1").removeClass("success")
        $(".bar1").addClass("warning")
    } else if (calColor >.75 && calColor<= 1) {
        $(".bar1").removeClass("warning")
        $(".bar1").addClass("alert")
    }

    var carColor = (parseInt(progressCar) / parseInt(totalCar)).toFixed(2)
    if (carColor <= .5) {
        $(".bar2").addClass("success")
    } else if (carColor >.5 && carColor<= .75) {
        $(".bar2").removeClass("success")
        $(".bar2").addClass("warning")
    } else if (carColor >.75 && carColor<= 1) {
        $(".bar2").removeClass("warning")
        $(".bar2").addClass("alert")
    }

    var proColor = (parseInt(progressPro) / parseInt(totalPro)).toFixed(2)
    if (proColor <= .5) {
        $(".bar3").addClass("alert")
    } else if (proColor >.5 && proColor<= .75) {
        $(".bar3").removeClass("alert")
        $(".bar3").addClass("warning")
    } else if (proColor >.75 && proColor<= 1) {
        $(".bar3").removeClass("warning")
        $(".bar3").removeClass("alert")
        $(".bar3").addClass("success")
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

$(".recipeUpdateBtn1").on("click", function() {
    event.preventDefault()
    event.stopPropagation()
    var servingsEaten = parseInt($(".servingsEaten").val())
    var pullCal = $(".0a").attr("calNum0")
    var calculateCal = (servingsEaten * pullCal)
    var pullCar = $(".0b").attr("carNum0")
    var calculateCar = (servingsEaten * pullCar)
    var pullPro = $(".0c").attr("proNum0")
    var calculatePro = (servingsEaten * pullPro)
    $(".updateModal1").empty()
    $(".updateModal1").append(`<label class="caloriesToUpdate">Calories to update: ${calculateCal}</label>`)
    $(".updateModal1").append(`<label class="carbsToUpdate">Carbs to update: ${calculateCar}</label>`)
    $(".updateModal1").append(`<label class="proteinToUpdate">Protein to update: ${calculatePro}</label>`)
    $(".updateModal1").append(`<button class="finalUpdate success button" data-close type="button">Changes Submitted - Close</button>`)
    
    var updatedCal = parseInt($(".bar1").attr(`aria-valuenow`)) + parseInt(calculateCal)
    $(".bar1").attr(`aria-valuenow`, updatedCal)
    var updatedCar = parseInt($(".bar2").attr(`aria-valuenow`)) + parseInt(calculateCar)
    $(".bar2").attr(`aria-valuenow`, updatedCar)
    var updatedPro = parseInt($(".bar3").attr(`aria-valuenow`)) + parseInt(calculatePro)
    $(".bar3").attr(`aria-valuenow`, updatedPro)
    progressBars()

})

$(".recipeUpdateBtn2").on("click", function() {
    event.preventDefault()
    event.stopPropagation()
    var servingsEaten = parseInt($(".servingsEaten2").val())
    var pullCal2 = $(".1a").attr("calNum1")
    var calculateCal = (servingsEaten * pullCal2)
    var pullCar2 = $(".1b").attr("carNum1")
    var calculateCar = (servingsEaten * pullCar2)
    var pullPro2 = $(".1c").attr("proNum1")
    var calculatePro = (servingsEaten * pullPro2)
    $(".updateModal2").empty()
    $(".updateModal2").append(`<label class="caloriesToUpdate">Calories to update: ${calculateCal}</label>`)
    $(".updateModal2").append(`<label class="carbsToUpdate">Carbs to update: ${calculateCar}</label>`)
    $(".updateModal2").append(`<label class="proteinToUpdate">Protein to update: ${calculatePro}</label>`)
    $(".updateModal2").append(`<button class="finalUpdate success button" data-close type="button">Changes Submitted - Close</button>`)
    
    var updatedCal = parseInt($(".bar1").attr(`aria-valuenow`)) + parseInt(calculateCal)
    $(".bar1").attr(`aria-valuenow`, updatedCal)
    var updatedCar = parseInt($(".bar2").attr(`aria-valuenow`)) + parseInt(calculateCar)
    $(".bar2").attr(`aria-valuenow`, updatedCar)
    var updatedPro = parseInt($(".bar3").attr(`aria-valuenow`)) + parseInt(calculatePro)
    $(".bar3").attr(`aria-valuenow`, updatedPro)
    progressBars()
})

$(".recipeUpdateBtn3").on("click", function() {
    event.preventDefault()
    event.stopPropagation()
    var servingsEaten = parseInt($(".servingsEaten3").val())
    var pullCal3 = $(".2a").attr("calNum2")
    var calculateCal = (servingsEaten * pullCal3)
    var pullCar3 = $(".2b").attr("carNum2")
    var calculateCar = (servingsEaten * pullCar3)
    var pullPro3 = $(".2c").attr("proNum2")
    var calculatePro = (servingsEaten * pullPro3)
    $(".updateModal3").empty()
    $(".updateModal3").append(`<label class="caloriesToUpdate">Calories to update: ${calculateCal}</label>`)
    $(".updateModal3").append(`<label class="carbsToUpdate">Carbs to update: ${calculateCar}</label>`)
    $(".updateModal3").append(`<label class="proteinToUpdate">Protein to update: ${calculatePro}</label>`)
    $(".updateModal3").append(`<button class="finalUpdate success button" data-close type="button">Changes Submitted - Close</button>`)
    
    var updatedCal = parseInt($(".bar1").attr(`aria-valuenow`)) + parseInt(calculateCal)
    $(".bar1").attr(`aria-valuenow`, updatedCal)
    var updatedCar = parseInt($(".bar2").attr(`aria-valuenow`)) + parseInt(calculateCar)
    $(".bar2").attr(`aria-valuenow`, updatedCar)
    var updatedPro = parseInt($(".bar3").attr(`aria-valuenow`)) + parseInt(calculatePro)
    $(".bar3").attr(`aria-valuenow`, updatedPro)
    progressBars()
})

$(".recipeUpdateBtn4").on("click", function() {
    event.preventDefault()
    event.stopPropagation()
    var servingsEaten = parseInt($(".servingsEaten4").val())
    var pullCal4 = $(".3a").attr("calNum3")
    var calculateCal = (servingsEaten * pullCal4)
    var pullCar4 = $(".3b").attr("carNum3")
    var calculateCar = (servingsEaten * pullCar4)
    var pullPro4 = $(".3c").attr("proNum3")
    var calculatePro = (servingsEaten * pullPro4)
    $(".updateModal4").empty()
    $(".updateModal4").append(`<label class="caloriesToUpdate">Calories to update: ${calculateCal}</label>`)
    $(".updateModal4").append(`<label class="carbsToUpdate">Carbs to update: ${calculateCar}</label>`)
    $(".updateModal4").append(`<label class="proteinToUpdate">Protein to update: ${calculatePro}</label>`)
    $(".updateModal4").append(`<button class="finalUpdate success button" data-close type="button">Changes Submitted - Close</button>`)
    
    var updatedCal = parseInt($(".bar1").attr(`aria-valuenow`)) + parseInt(calculateCal)
    $(".bar1").attr(`aria-valuenow`, updatedCal)
    var updatedCar = parseInt($(".bar2").attr(`aria-valuenow`)) + parseInt(calculateCar)
    $(".bar2").attr(`aria-valuenow`, updatedCar)
    var updatedPro = parseInt($(".bar3").attr(`aria-valuenow`)) + parseInt(calculatePro)
    $(".bar3").attr(`aria-valuenow`, updatedPro)
    progressBars()
})

$(".recipeUpdateBtn5").on("click", function() {
    event.preventDefault()
    event.stopPropagation()
    var servingsEaten = parseInt($(".servingsEaten5").val())
    var pullCal5 = $(".4a").attr("calNum4")
    var calculateCal = (servingsEaten * pullCal5)
    var pullCar5 = $(".4b").attr("carNum4")
    var calculateCar = (servingsEaten * pullCar5)
    var pullPro5 = $(".4c").attr("proNum4")
    var calculatePro = (servingsEaten * pullPro5)
    $(".updateModal5").empty()
    $(".updateModal5").append(`<label class="caloriesToUpdate">Calories to update: ${calculateCal}</label>`)
    $(".updateModal5").append(`<label class="carbsToUpdate">Carbs to update: ${calculateCar}</label>`)
    $(".updateModal5").append(`<label class="proteinToUpdate">Protein to update: ${calculatePro}</label>`)
    $(".updateModal5").append(`<button class="finalUpdate success button" data-close type="button">Changes Submitted - Close</button>`)
    
    var updatedCal = parseInt($(".bar1").attr(`aria-valuenow`)) + parseInt(calculateCal)
    $(".bar1").attr(`aria-valuenow`, updatedCal)
    var updatedCar = parseInt($(".bar2").attr(`aria-valuenow`)) + parseInt(calculateCar)
    $(".bar2").attr(`aria-valuenow`, updatedCar)
    var updatedPro = parseInt($(".bar3").attr(`aria-valuenow`)) + parseInt(calculatePro)
    $(".bar3").attr(`aria-valuenow`, updatedPro)
    progressBars()
})



