import React, { useState, useEffect } from 'react';
import './Getevents.css'
import build from '../../assets/building.gif'
import tar from '../../assets/target.gif'

import i1 from '../../assets/getevent1.gif'
import i2 from '../../assets/getevent2.gif'
import i3 from '../../assets/getevent3.gif'
import i4 from '../../assets/getevent4.gif'

import { useNavigate, useParams } from 'react-router-dom';

const Getevents = () => {
    let { eventId } = useParams();
    console.log(eventId);
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`${process.env.BASE_URL}/events/${eventId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                const data = await response.json();
                console.log(data);
                setEvent(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, [eventId]);

    const registerTeam = () => {
        navigate('/registerme');
    };

    if (!event) {
        return <div>Loading...</div>;
    }

    return (
        <div className='getevents_main'>
            <div className='division_cont'>
                <div className='column left'>
                    <div className='subcolumn1'>
                        <h1>{event.challengeName}</h1>
                        <div className='row_two'>
                            <img src={build} alt='' className='sub_img'/>
                            <h3>{event.companyName}</h3>
                        </div>

                        <div className='row_three'>
                            <img src={tar} alt='' className='sub_img' />
                            <h3> Online</h3>
                        </div>

                        <div className='row_four'>
                            <h3>All you need to Know about {event.challengeName}</h3>
                            <p>{event.benefitsOfParticipating}</p>
                        </div>

                        <div className='row_btn'>
                            <button className='description_btn'>Description</button>
                        </div>
                    </div>
                    <div className='subcolumn2'>
                        <h1>{event.challengeName} : Timeline and Dates</h1>
                        <p>In order to win the ultimate prize - The {event.firstPrize} and {event.topTenPrize}, finish the {event.challengeName} at the earliest.</p>
                        <div className='dates'>
                            <div className='start_date'>
                                <h3>Start Date</h3>
                                <p>{event.startDate}</p>
                            </div>
                            <div className='End_date'>
                                <h3>End Date</h3>
                                <p>{event.endDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='column right'>
                    <div className='button_head'>
                        <h3>Free</h3>
                        <button className='reg_btn' onClick={registerTeam}>Register</button>
                    </div>
                    <div className='participation_detail'>
                        <div className='r1'>
                            <img src={i1} className='right_icon'  alt=""/>
                            <div className='content_r'>
                                <h3>Registered</h3>
                                <h4>12,540</h4>
                            </div>
                        </div>
                        <div className='r1'>
                            <img src={i2} className='right_icon'  alt=""/>
                            <div className='content_r'>
                                <h3>Registration Deadline</h3>
                                <h4>9 Days Left</h4>
                            </div>
                        </div>
                        <div className='r1'>
                            <img src={i3} className='right_icon'  alt=""/>
                            <div className='content_r'>
                                <h3>Individual</h3>
                                <h4>Participation</h4>
                            </div>
                        </div>
                        <div className='r1'>
                            <img src={i4} className='right_icon'  alt=""/>
                            <div className='content_r'>
                                <h3>Impressions</h3>
                                <h4>32,00,764</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Getevents;
