const mongoose = require('mongoose')
const companySchema = require('../db/Schemas/companySchema')

const company = mongoose.model('company',companySchema)

module.exports = Company