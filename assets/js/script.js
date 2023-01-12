// TODO: Declare any global variables we need
let numberHeads = 0
let numberTails = 0
let pctHeads = 0
let pctTails = 0
let total = 0

//DOM variable
const flipButton = document.querySelector("#flip")
const clearButton = document.querySelector("#clear")
const statusMessage = document.querySelector(".status")
const image = document.querySelector("img")
const numberHeadsCell = document.querySelector("#heads")
const numberTailsCell = document.querySelector("#tails")
const pctHeadsCell = document.querySelector("#heads-percent")
const pctTailsCell = document.querySelector("#tails-percent")

document.addEventListener('DOMContentLoaded', function () {

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    flipButton.addEventListener("click", function(e){
        console.log("I've been clicked")
        total ++ 
        let result = Math.round(Math.random() *101)
        console.log("result:",result)

        //heads: 0-50
        if (result < 51){
            numberHeads ++
            statusMessage.textContent = "You flipped heads!"
            image.src = "./assets/images/penny-heads.jpg"
        } 
        //tails: 51-100
        else {
            numberTails ++
            statusMessage.textContent = "You flipped tails!"
            image.src = "./assets/images/penny-tails.jpg"
        }
        console.log(numberHeads, numberTails)

        //calculate the percentages
        pctHeads = Math.round(numberHeads/total *100)
        pctTails = Math.round(numberTails/total *100)
        console.log("percentages", pctHeads, pctTails)

        //show the results in the scoreboard
        numberHeadsCell.textContent = `${numberHeads}`
        numberTailsCell.textContent = `${numberTails}`
        pctTailsCell.textContent = `${pctTails}%`
        pctHeadsCell.textContent = `${pctHeads}%`
        
    })
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
    clearButton.addEventListener("click", function(e){
        total = 0
        pctHeads = 0
        pctTails = 0
        numberHeads = 0
        numberTails = 0

        numberHeadsCell.textContent = `${numberHeads}`
        numberTailsCell.textContent = `${numberTails}`
        pctTailsCell.textContent = `${pctTails}%`
        pctHeadsCell.textContent = `${pctHeads}%`

        statusMessage.textContent = "Let's Get Rolling"
        image.src = "./assets/images/penny-heads.jpg"
    })
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})