var Restaurant = require('../models/restaurant')

var restaurantOp = {}

restaurantOp.addRest = (newName, newType) => {
    var newRestaurant = new Restaurant({
        name : newName,
        type: newType
    });
    newRestaurant.save((err, data)=>{
        if (err) {
            console.log( err);
        }
        else{
            console.log(data)
        }
    });
}

restaurantOp.listRest =  (res)=>{
    Restaurant.find({}).exec((data, err) =>{
        if(err){
            res.json(err)
        }
        else{
            res.json({'response' :  data})
        }
    })
}

module.exports = restaurantOp