const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
    {
        moviename : {
            required : true,
            type : String
        },
        year : {
            required : true,
            type : String
        },
        about : {
            required : true,
            type : String
        }
    }
)

module.exports = mongoose.model('Post', postSchema);