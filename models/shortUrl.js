const mongoose = require('mongoose')
const shortId = require('shortid')
shortId.generate

const shortUrlsSchema = new mongoose.Schema({
    full: {
        type: String,
        requird : true
    },
    short : {
        type : String,
        required : true,
        default: shortId.generate
    },
    clicks: {
        type : Number,
        required : true,
        default : 0
    }

})

module.exports = mongoose.model('ShortUrl',shortUrlsSchema)