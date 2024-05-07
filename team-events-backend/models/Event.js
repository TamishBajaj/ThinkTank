const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    organizer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,

    },
    challengeName: {
        type: String,
        required: true
    },
    benefitsOfParticipating: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    registrationType: {
        type: String, // This could be 'individual' or 'team'
        required: true
    },
    firstPrize: {
        type: String,
        required: true
    },
    topTenPrize: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    durationOfTest: {
        type: String,
        required: true
    },
    companyName:{
        type:String,
        required:true
    },
    problemStatement:{
        type:String,
        required:true
    },
    
    techStack:{
        type:[String],
        required:true
    }
})

module.exports = mongoose.model('Event', eventSchema);