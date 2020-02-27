/*
Define a images array and add all the images names (only if wb is part of the name) and extension

Create a img element for each image in the images array
Set the image src attribute with the image name (example: batmanwb.png)
We'll show the black and white pictures When the document gets rendered


Replace the black and white picture for the color one when the user rolls over the image element (like it's active)
Replace the color image for the black and white one when the user rolls out of the image element (like it's inactive again)
Show an alert with the superhero name in upper case when the user clicks on an image using
Append all the created image elements to the body element
*/

// make an array for the image for WB
window.onload = function(){

    let images = ['img/batmanwb.png', 'img/supermanwb.png', 'img/wonder_womanwb.png', 'img/flashwb.png'];
    let imagesColor = ['img/batman.png', 'img/superman.png', 'img/wonder_woman.png', 'img/flash.png'];

    let img1 = this.document.createElement('img');
    let img2 = this.document.createElement('img');
    let img3 = this.document.createElement('img');
    let img4 = this.document.createElement('img');

    let body = this.document.querySelector('body');

    img1.setAttribute('src', images[0]);
    img2.setAttribute('src', images[1]);
    img3.setAttribute('src', images[2]);
    img4.setAttribute('src', images[3]);

    body.appendChild(img1)
    body.appendChild(img2)
    body.appendChild(img3)
    body.appendChild(img4)

    //for batman
    img1.addEventListener('mouseover', function(){
        img1.setAttribute('src', imagesColor[0])
        img1.addEventListener('mouseout', function(){
            img1.setAttribute('src', images[0])
        })
    })

    img1.addEventListener('click', function(){
        alert('I\'m batman')
    })

    //for superman
    img2.addEventListener('mouseover', function(){
        img2.setAttribute('src', imagesColor[1])
        img2.addEventListener('mouseout', function(){
            img2.setAttribute('src', images[1])
        })
    })
    
    img2.addEventListener('click', function(){
        alert('I\'m superman')
    })

    img3.addEventListener('mouseover', function(){
        img3.setAttribute('src', imagesColor[2])
        img3.addEventListener('mouseout', function(){
            img3.setAttribute('src', images[2])
        })
    })
    
    img3.addEventListener('click', function(){
        alert('I\'m wonder woman!')
    })

    img4.addEventListener('mouseover', function(){
        img4.setAttribute('src', imagesColor[3])
        img4.addEventListener('mouseout', function(){
            img4.setAttribute('src', images[3])
        })
    })
    
    img4.addEventListener('click', function(){
        alert('I\'m the flash!')
    })


}
