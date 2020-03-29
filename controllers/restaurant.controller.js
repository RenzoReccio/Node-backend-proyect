var Restaurant = require('../models/restaurant.models')

exports.save = (req, res) => {
    if(!req.body.name || !req.body.type){
        res.status(400).send({
            message : "Send some information"
        })
    }
    
    const restaurant = new Restaurant({
        name : req.body.name,
        type : req.body.type
    })

    restaurant.save().then(
        data =>{
            res.send(data)
        }
    ).catch(err => {
        res.status(500).send({
            message : err.message || "An error ocurred while doing the operation"
        })
    })
}

exports.listAll = (req, res) => {
    Restaurant.find({}).then(data=>{
        res.send(data)
    }).catch(err =>{
        res.send({
            message : err.message || "An error ocurred while doing the operation"
        })
    })
}

exports.listByName = (req, res) => {
    console.log(req.body)
    if(!req.body.name){
        res.status(400).send({
            message : "A name must be given"
        })
    }

    Restaurant.find({name: req.body.name}).then(data =>{
        if(!data){
            res.status(404).send({
                message : "There is no restaurarants  with name:" + req.body.name 
            })
        }
        res.send(data)
    })
}

exports.searchandUpdate = (req, res) => {
    if(!req.body.name){
        res.status(400).send({
            message : "A name must be given"
        })
    }
    
    Restaurant.findByIdAndUpdate(req.body.restid, {
        name : req.body.name,
        type : req.body.type  
    }, {new: true})
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: "There is no restaurant with the id given"
                })
            }
            res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "There was an error in the application"
        })
    })
} 


exports.delete = (req, res) =>{
    Restaurant.findByIdAndRemove(req.body.restid).then(data => {
        if(!data){
            res.status(404).send({
                message : "There is no restaurant with the id given"
            })
        }
        res.send({
            message : "Restaurant deleted succesfully"
        })
    }).catch(err => {
        res.send({
            message : err.message || "There was an error in the application"
        })
    })
}