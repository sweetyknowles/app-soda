const mongoose = require('mongoose')
const sodaSchema = require('../db/Schemas/sodaSchema')

const soda = mongoose.model('soda',sodaSchema)

module.exports = Soda