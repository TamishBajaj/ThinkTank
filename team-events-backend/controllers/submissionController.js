const Submission = require('../models/Submission');

exports.submitSolution = async (req, res) =>{
    try{
        const {eventId,code} = req.body

        //check if the team is registered for event
        const submission=new Submission({
            team:req.user.teamId,
            event:eventId,
            code
        })

        await submission.save()
        res.status(201).json({ msg: 'Solution submitted successfully', submission });
    }catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
      }
}