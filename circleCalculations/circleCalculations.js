//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

let radius = parseInt(prompt("Enter the radius for the circle."))
let CircleArea = Math.PI * Math.pow(radius, 2)
let perimeter = 2 * Math.PI * radius

function circleCalculation () {
	
	console.log("The area of the circle is " + Math.round(CircleArea) + " and the perimeter of the circle is " + Math.round(perimeter) + ".") }

circleCalculation(radius);