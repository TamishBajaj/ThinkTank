import React, { useState, useEffect } from 'react';
import './Guidlines.css';
import { TiPin } from "react-icons/ti";
import trophy from '../../assets/trophy.gif';
import { useParams } from 'react-router-dom';

const Guidlines = () => {
    let { eventId } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/v1/events/${eventId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                const data = await response.json();
                setEvent(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, [eventId]);

    if (!event) {
        return <div>Loading...</div>;
    }

    return (
        <div className='guidlines'>
            <div className='eligibilty'>
                <h2>Elegibity Creteria and Rules:</h2>
                <div className='row_dtl'>
                    <TiPin className='icn' />
                    <h3>The Event is open to all "Undergrads and Postgrads"</h3>
                </div>
                <div className='row_dtl'>
                    <TiPin className='icn' />
                    <h3>Any Number of students can register from any college</h3>
                </div>
                <div className='row_dtl'>
                    <TiPin className='icn' />
                    <h3>Participating students have to register {event.registrationType}</h3>
                </div>
                <div className='row_dtl'>
                    <TiPin className='icn' />
                    <h3>Participants will receive a confirmation email after registering themselves.</h3>
                </div>
            </div>

            <div className='key_instruction'>
                <h2>Key Instructions for the Event:</h2>
                <div className='row_dtl'>
                    <TiPin className='icn' />
                    <h3>In order to win the ultimate prize :- "{event.firstPrize}" finish the {event.challengeName} at the earliest.</h3>
                </div>
                <div className='row_dtl'>
                    <TiPin className='icn' />
                    <h3>The event should be cracked in {event.durationOfTest} hours</h3>
                </div>
                <div className='row_dtl'>
                    <TiPin className='icn' />
                    <h3>Click on the 'Play' button during the specified time window </h3>
                </div>
                <div className='row_dtl'>
                    <TiPin className='icn' />
                    <h3>Participants will not be able to proceed to the next question if they don't answer the question at hand correctly.</h3>
                </div>
                <div className='row_dtl'>
                    <TiPin className='icn' />
                    <h3>The winners will be declared basis the earliest finishing time within four hours duration.</h3>
                </div>
            </div>

            <div className='prizes'>
                <h2>Rewards and Prizes:</h2>
                <div className='prize_column'>
                    <div className='card_prize'>
                        <div className='prize_text'>
                            <h2>Winner</h2>
                            <p>The Winner will be rewarded with a {event.firstPrize}.</p>
                        </div>
                        <img src={trophy} alt='' className='trophy_img' />
                    </div>
                    <div className='card_prize'>
                        <div className='prize_text'>
                            <h2>Top 10 Runner-ups</h2>
                            <p>The top 10 runner-ups will be rewarded {event.topTenPrize}</p>
                        </div>
                        <img src={trophy} alt='' className='trophy_img' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guidlines;
