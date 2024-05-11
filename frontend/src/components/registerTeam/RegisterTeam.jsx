
import  { useState } from 'react';
import axios from 'axios';
import './RegisterTeam.css'
import { BASE_URL } from '../../baseurl';
const RegisterTeam = ({ eventId }) => {
  const [formData, setFormData] = useState({
    teamName: '',
    memberNames: '', // Changed from 'members' to 'memberNames'
    teamSize: '',
    code: ''
  });

  const { teamName, memberNames, teamSize, code } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/teams/registerTeam`, {
        eventName: eventId,
        teamName,
        memberNames: memberNames.split(','), // Convert memberNames string to array
        teamSize,
        code
      });
      console.log(res.data); // Handle successful team registration (e.g., redirect user)
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="register-team-container">
      <div className="form-wrapper">
        <h2 className="title"><span className='span__item'>Register Team</span> and Submit Code</h2>
        <hr className="separator" />
        <form onSubmit={onSubmit} className="team-form">
          <input
            type="text"
            placeholder="Team Name"
            name="teamName"
            value={teamName}
            onChange={onChange}
            required
            className="input-field"
          />
          <input
            type="text"
            placeholder="Team Members (Comma-separated)"
            name="memberNames" // Changed from 'members' to 'memberNames'
            value={memberNames}
            onChange={onChange}
            required
            className="input-field"
          />
          <input
            type="number"
            placeholder="Team Size"
            name="teamSize"
            value={teamSize}
            onChange={onChange}
            required
            className="input-field"
          />
          <textarea
            placeholder="Github Link"
            name="code"
            value={code}
            onChange={onChange}
            required
            className="input-field code-field"
          ></textarea>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}


export default RegisterTeam