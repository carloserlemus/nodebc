/*
Define the function getShapePerimiter that accepts 2 parameters: base and height

If base and height are equal then calculate the perimeter of a square
If base and height are not equal then calculate the perimeter of a rectangle

This function returns a number that represents the shape perimiter

Show the following output: %perimiter% is the shape perimiter

If the perimeter is bigger than 100 then show the following output: The perimiter is to big

Else show the following message: The perimiter is fine

Call this function a couple of times with different values
Test all posible cases
*/
function getShapePerimeter(base, height){
    
    if (((4*base) >= 100) || ((2*(base + height)) >= 100)){
        console.log('Perimeter is too big.')
    } else if (base == height){
        console.log('perimeter is: ' + 4*base)
    } else if (base > height || base < height){
        console.log('Perimeter is: ' + (2*(base + height)))
    }
}
getShapePerimeter(3,3);
getShapePerimeter(2,9);
getShapePerimeter(0,0);
getShapePerimeter(200, 200);
getShapePerimeter(100, 100);
getShapePerimeter(25, 25);