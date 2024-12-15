const express = require("express");
const router = express.Router();
// import hotels from "../hotels.js";
const hotels = require("../hotels.js"); 


//http://localhost:3000/hotels/sort/pricing?pricing=low-to-high
router.get("/hotels/sort/pricing", async (req, res) => {
  const pricing = req.query.pricing;
  let comparatorFn = (a, b) => {
    if (pricing === "low-to-high") {
      return a.price - b.price;
    }
    if (pricing === "high-to-low") {
      return b.price - a.price;
    }
  };
//   console.log(hotels);
//   console.log(Array.isArray(hotels));  // Check if hotels is an array

  const sortedHotel = hotels.default.sort(comparatorFn); //default 
  res.json(sortedHotel);

});

//<http://localhost:3000/hotels/sort/rating?rating=low-to-high>
router.get("/hotels/sort/rating", async (req, res) => {
    const pricing = req.query.rating;
    let comparatorFn = (a, b) => {
      if (pricing === "low-to-high") {
        return a.rating - b.rating;
      }
      if (pricing === "high-to-low") {
        return b.rating - a.rating;
      }
    };
  //   console.log(hotels);
  //   console.log(Array.isArray(hotels));  // Check if hotels is an array
  
    const sortedHotel = hotels.default.sort(comparatorFn); //default 
    res.json(sortedHotel);
  
  });

//<http://localhost:3000/hotels/sort/reviews?reviews=least-to-most>
router.get("/hotels/sort/reviews", async (req, res) => {
    const reviews = req.query.reviews;
    let comparatorFn = (a, b) => {
      if (reviews === "least-to-most") {
        return a.reviews - b.reviews;
      }
      if (reviews === "most-to-least") {
        return b.reviews - a.reviews;
      }
    };
  //   console.log(hotels);
  //   console.log(Array.isArray(hotels));  // Check if hotels is an array
  
    const sortedHotel = hotels.default.sort(comparatorFn); //default 
    res.json(sortedHotel);
  
  });

//http://localhost:3000/hotels/filter/amenity?amenity=spa
router.get("/hotels/filter/amenity", async (req, res) => {
    const amenity = req.query.amenity;
   
    // console.log(Array.isArray(hotels.default));  // Check if hotels is an array
    const filtered = hotels.default.filter((hotel)=>{
        return hotel.amenity.toLowerCase() === amenity.toLowerCase()
    })
    res.json(filtered);
  
  });

//http://localhost:3000/hotels/filter/country?country=india
router.get("/hotels/filter/country", async (req, res) => {
    const country = req.query.country;
   
    // console.log(Array.isArray(hotels.default));  // Check if hotels is an array
    const filtered = hotels.default.filter((hotel)=>{
        return hotel.country.toLowerCase() === country.toLowerCase()
    })
    res.json(filtered);
  
  });


  //http://localhost:3000/hotels/filter/category?category=luxury
router.get("/hotels/filter/category", async (req, res) => {
    const category = req.query.category;
   
    // console.log(Array.isArray(hotels.default));  // Check if hotels is an array
    const filtered = hotels.default.filter((hotel)=>{
        return hotel.category.toLowerCase() === category.toLowerCase()
    })
    res.json(filtered);
  
  });
  
  //<http://localhost:3000/hotels
  router.get("/hotels", async (req, res) => {
    
    res.json(hotels.default);
  
  });

module.exports = router;
