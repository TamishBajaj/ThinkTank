import React, { useState, useEffect } from 'react';
import './Cards.css'
import imggg from '../../assets/webthree-3.gif'
import { useNavigate } from 'react-router-dom';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import im1 from '../../assets/card1.gif'
import im2 from '../../assets/card2.gif'
import im3 from '../../assets/card3.gif'
import im4 from '../../assets/card4.gif'
import im5 from '../../assets/card5.gif'
import im6 from '../../assets/card6.gif'



const Cards = () => {

    

    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    
    

    useEffect(() => {
        // Fetch data from the backend API
        const fetchData = async () => {
          try {
            const response = await fetch(`${process.env.BASE_URL}/events/getAllEvents`);
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log("data", data);
            const generatedCards = data.map((card, index) => ({
                ...card,
                image: index % 6 === 0 ? im1 : 
                       index % 6 === 1 ? im2 :
                       index % 6 === 2 ? im3 :
                       index % 6 === 3 ? im4 :
                       index % 6 === 4 ? im5 :
                                         im6
            }));
            setCards(generatedCards);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); // Call fetchData function when the component mounts
      }, []);


    const viewProblem = (card_id) => {
        navigate('/events/'+card_id);
      };

      const slidesPerViews = window.innerWidth <= 650 ? 1 : 3;

  return (

  



    
     <div className='card_container'>
        <div className='card_head'>
            <h1>Explore Challanges</h1>
            <h3>Queue of getting Placed</h3>

        </div>

        <div className='card_cont'>
        <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={slidesPerViews}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className='card'>
                                <img src={card.image} alt='Card' className='card-image' />
                                <h3 className='special'>{card.companyName}</h3>
                                <p >{card.challengeName}</p>
                                
                                   
                                <button className='submitSolution' onClick={() => viewProblem(card._id)}>View Problem</button>
                                
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

        </div>

    </div>

  )
}

export default Cards