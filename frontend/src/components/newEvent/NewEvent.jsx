import { useState } from 'react';
import axios from 'axios';
import './NewEvent.css'
import { FaArrowRight } from "react-icons/fa";

export const NewEvent = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    problemStatement: '',
    timePeriod: '',
    techStack: ''
  });

  const { companyName, problemStatement, timePeriod, techStack } = formData;

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
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="create-event-container">
      <div className="form-wrapper">
        <h1 className="title"><span className='span__item'>Create</span> Event</h1>
        <hr className="separator" />
        <form onSubmit={onSubmit} className="event-form">
          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            value={companyName}
            onChange={onChange}
            required
            className="input-field wide-input"
          />
          <textarea
            placeholder="Problem Statement"
            name="problemStatement"
            value={problemStatement}
            onChange={onChange}
            required
            className="input-field wide-input"
          ></textarea>
          <input
            type="text"
            placeholder="Time Period"
            name="timePeriod"
            value={timePeriod}
            onChange={onChange}
            required
            className="input-field wide-input"
          />
          <input
            type="text"
            placeholder="Tech Stack (comma-separated)"
            name="techStack"
            value={techStack}
            onChange={onChange}
            required
            className="input-field wide-input"
          />
          <button type="submit" className="submit-btn">
            Create Event <FaArrowRight className='arrow'/>
          </button>
        </form>
      </div>
    </div>
  )
}