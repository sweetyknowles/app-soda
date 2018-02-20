const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sodaSchema = require ('./sodaSchema')

const sodaSchema = new Schema({

    name:String,
    location:String,
    soda: [ sodaSchema ]
    
})

module.exports = companySchema //we can build the Schema here and import