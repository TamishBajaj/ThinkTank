import  { useState } from 'react';
import './PlayerRegister.css'
import axios from 'axios';

import top from '../../assets/card1.gif'
import { BASE_URL } from '../../baseurl';
const PlayerRegister = ({ eventId }) => {

    const [formData, setFormData] = useState({
        email:'',
        teamName: '',
        contact:'',
        memberNames: '', // Changed from 'members' to 'memberNames'
        teamSize: '',
        institute:'',
        specialization:'',
        
      });


      const { email,teamName,contact, memberNames, teamSize,institute, specialization} = formData;

      const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

      const onSubmit = async e => {
        e.preventDefault();
        try {
          const res = await axios.post(`${BASE_URL}/teams/registerTeam`, {
            eventName: eventId,
            email,
            teamName,
            contact,
            memberNames: memberNames.split(','), // Convert memberNames string to array
            teamSize,
            institute,
            specialization,
            
          });
          console.log(res.data); // Handle successful team registration (e.g., redirect user)
        } catch (err) {
          console.error(err.response.data);
        }
      };


  return (
    <div className='color_b'>

<div className='register_head'>
        <img src={top} alt='' className='top_img'/>
        <h1>"Samsung Galaxy AI Treasure Hunt"</h1>

    </div>
    
   <div className='player-register'>

   

    

    

    <div className='player_detail'>
        <h3>Player Detail</h3>

        <form onSubmit={onSubmit} className='registrationForm'>
            <input type='email' placeholder='Email' name='email'  onChange={onChange} value={email} className="input_reg" required /> 

           

            <input type='number' placeholder='Phone No.' name='contact'  onChange={onChange}  value={contact} className="input_reg"required/>
           

            <input
            type="text"
            placeholder="Team Name"
            name="teamName"
            value={teamName}
            onChange={onChange}
            required
            className="input_reg"
          />

           <input
            type="text"
            placeholder="Team Members (Comma-separated)"
            name="memberNames" // Changed from 'members' to 'memberNames'
            value={memberNames}
            onChange={onChange}
            required
            className="input_reg"
          />

<input type='number' placeholder='Team-Size' name='teamSize'  onChange={onChange} value={teamSize} className="input_reg" required />

        <input type='text' placeholder='Institute Name' name='institute'  onChange={onChange} value={institute} className="input_reg abc" required />
            


            <label for="cars" className='options'>Choose your Specialization:</label>
            <select id="specialization" name="specialization"  value={specialization} className='opt'>
               <option value="cse" >CSE</option>
                <option value="it">IT</option>
                <option value="ece">ECE</option>
                <option value="bio">Biotech</option>
                <option value="aero">Aerospace</option>
                <option value="chemical">Chemical</option>
                <option value="civil">Civil</option>
                <option value="elec">Electronics</option>
                <option value="mechanical">Mechanical</option>
                <option value="textile">Textile</option>
            </select>  
            <div>
            <button type="submit" className="reg_btn">
                Submit
            </button>
            </div>
           

        </form>

    </div>
    
   </div>
   </div>
  )
}

export default PlayerRegister