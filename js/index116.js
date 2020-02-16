/*
Define the getHexaColor function that accepts one of the following web colors as parameter:
white
black
blue
green
yellow
pink
This function returns the hexa color for the given parameter color:
param: white, return value: #FFFFFF
param: black, return value: #000000
param: blue, return value: #0b24fb
param: green, return value: #0e7e12
param: yellow, return value: #fffd38
param: pink, return value: #fec1cc
The returned value must be a string
Call the function using each posible value as parameter
Show each hexa color as output
*/

// switch solution

function getHexaColor2(color){
    switch (color) {
        case 'white':
            console.log('#FFFFFF')
            break;
        case 'black':
            console.log('#000000');
            break;
    }
}

// If Else nested solution

function getHexaColor(color){
    if (color == 'white'){
        console.log('#FFFFFF')
    } else if ( color == 'black'){
        console.log('#000000')
    } else if (color == 'blue'){
        console.log('#0b24fb')
    } else {
        console.log('Too much work to enter the rest.')
    }
}
getHexaColor2('black');
getHexaColor2('white');
getHexaColor('white');
getHexaColor('black');
getHexaColor('blue');
getHexaColor('Blurple');