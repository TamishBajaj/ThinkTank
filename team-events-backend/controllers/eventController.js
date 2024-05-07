const Event = require('../models/Event');
const User = require('../models/User'); // Import the User model
const transporter = require('../utils/emailConfig');


exports.createEvent=async(req,res)=>{
  
    try{
        const { 
          organizer,
          companyName,
          problemStatement,
          techStack,
          challengeName,
          benefitsOfParticipating,
          startDate,
          endDate,
          registrationType,
          firstPrize,
          topTenPrize,
          imageUrl,
          durationOfTest}=req.body
         

        //create Event
        

        const event=new Event({
           organizer:req.user.userId,
            companyName,
            problemStatement,
            
            techStack,
            challengeName,
            benefitsOfParticipating,
            startDate,
            endDate,
            registrationType,
            firstPrize,
            topTenPrize,
            imageUrl,
            durationOfTest
        })

        await event.save()
       

    //     const users = await User.find();
    // users.forEach(user => {
    //   transporter.sendMail({
    //     from: 'dummyacc171813@gmail.com',
    //     to: user.email,
    //     subject: 'New Event Created',
    //     text: 'A new event has been created on the platform.'
    //   });
    // });

        res.status(201).json({ msg: 'Event created successfully', event });
    }catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
      }
}

exports.getAllEvents = async (req, res) => {
    try {
      const events = await Event.find().populate('organizer', 'email');
  
      res.json(events);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server Error' });
    }
  };


  exports.getEventById = async (req, res) => {
    try {
      const eventId = req.params.eventId;
      const event = await Event.findById(eventId).populate('organizer', 'email');
      if (!event) {
        return res.status(404).json({ msg: 'Event not found' });
      }
      res.json(event);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server Error' });
    }
  };