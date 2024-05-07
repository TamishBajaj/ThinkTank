import { useState } from 'react';
import axios from 'axios';
import './SubmitProblem.css'
import leftimg from '../../assets/leftimg.jpg'

const SubmitProblem = () => {

  const [formData, setFormData] = useState({
    challengeName:'',
    benefitsOfParticipating:'',
    startDate:'',
    endDate:'',
    registrationType:'',
    firstPrize:'',
    topTenPrize:'',
    imageUrl:'',
    durationOfTest:'',
    companyName: '',

    problemStatement: '',
    
    
  });


  const {challengeName,benefitsOfParticipating,startDate,endDate,registrationType,firstPrize,topTenPrize,imageUrl,durationOfTest, companyName, problemStatement } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Retrieve the JWT token from local storage
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': `Bearer ${token}` // Include the JWT token in the request headers
        }
      };
      const res = await axios.post('http://localhost:3000/api/v1/events/createEvent', formData, config);
      console.log(res.data); // Handle successful event creation (e.g., redirect user)
      alert("Event Created Sucessfully");
    } catch (err) {
      console.error(err.response.data);
    }
  };


  return (
    <div className='submitpb'>
        <div className='pb_head'>
            <h1>Create Event</h1>
            <h3>Get the right Solution from Experts in your field.</h3>
        </div>

        <div className='main_contform'>
          <div className='main_imgcont'>
            <img src={leftimg} className='left_img' alt=''/>
          </div>

          <div className='form_right'>
            <form onSubmit={onSubmit} className='problem_form'>
            <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            value={companyName}
            onChange={onChange}
            required
            className="problem_input"
          />

         <input
            type="text"
            placeholder="Challenge Name"
            name="challengeName"
            value={challengeName}
            onChange={onChange}
            required
            className="problem_input"
          />

          <textarea
            placeholder="Problem Statement"
            name="problemStatement"
            value={problemStatement}
            onChange={onChange}
            required
            className="problem_input"
          ></textarea>

           <textarea
            placeholder="Benefits of participating"
            name="benefitsOfParticipating"
            value={benefitsOfParticipating}
            onChange={onChange}
            required
            className="problem_input"
          ></textarea>

           <label for="startDate" className='text_form'>Start Date:</label>
           <input type="date" id="startDate" name="startDate" value={startDate} onChange={onChange} required className="problem_input"/>

           <label for="endDate" className='text_form'>End Date:</label>
           <input type="date" id="endDate" name="endDate" value={endDate} onChange={onChange} required className="problem_input"/>

           <input
            type="text"
            placeholder="Duration of test(in hrs)"
            name="durationOfTest"
            value={durationOfTest}
            onChange={onChange}
            required
            className="problem_input"
          />

           <input
            type="text"
            placeholder="First Prize"
            name="firstPrize"
            value={firstPrize}
            onChange={onChange}
            required
            className="problem_input"
          />

            <input
            type="text"
            placeholder="Prizes for other if any"
            name="topTenPrize"
            value={topTenPrize}
            onChange={onChange}
            required
            className="problem_input"
          />

          <label for="registrationType" className='text_form spc'>Registration:</label>
          <select id="registrationType" name="registrationType"  value={registrationType}  onChange={onChange} required  className="problem_input">
            <option value="online">Online</option>
            <option value="offline">Offline</option>
             
          </select>


          <input
            type="text"
            placeholder="Image URL of Your Event Poster"
            name="imageUrl"
            value={imageUrl}
            onChange={onChange}
            required
            className="problem_input"
          />

          <button type="submit" className="event_creation">
            Create Event
          </button>


            </form>
           </div> 

        </div>

    </div>
  )
}

export default SubmitProblem