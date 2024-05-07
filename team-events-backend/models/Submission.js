const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    team:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Team',
        required:true

    },
    event:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required:true
    },
    code:{
        type:String,
        required:true
    },
    submitedAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Submission', submissionSchema);