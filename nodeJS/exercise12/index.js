/*
Create a Express web server using port 3000
Create the following routes:
GET '/api/products': send the following object as JSON


{
  description: 'Products',
  items: [
    { name: 'Star Wars jacket' , price: 100},
    { name: 'FIFA 22 PS4' , price: 79},
    { name: 'Superheore t-shirt' , price: 10},
    { name: 'Jets game shirt' , price: 200},
    { name: 'Large Meat lovers pizza' , price: 12},
    { name: 'Canada Dry  bottle' , price: 2}
  ]
}


Open the browser and request localhost:3000/api/products
You should get the JSON object as response
*/

//reference express server

const express = require('express');
const app = express();
const port = 3000;

app.get('/api/products', (req, res) => {
    res.json({
        description: 'Products',
        items: [
          { name: 'Star Wars jacket' , price: 100},
          { name: 'FIFA 22 PS4' , price: 79},
          { name: 'Superheore t-shirt' , price: 10},
          { name: 'Jets game shirt' , price: 200},
          { name: 'Large Meat lovers pizza' , price: 12},
          { name: 'Canada Dry  bottle' , price: 2}
        ]
      })
})

app.listen(port, (err) => {
    if (err){
        console.log('Error!')
    } else {
        console.log('Smooth sailing.')
    }
})