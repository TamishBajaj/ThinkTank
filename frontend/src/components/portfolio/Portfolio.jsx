/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import {React,useRef} from 'react'
import './Portfolio.css'
import {motion,useScroll,useSpring, useTransform} from 'framer-motion'

const items=[
  {
    id:1,
    title:"ThinkTank",
    img:"https://images.pexels.com/photos/20623990/pexels-photo-20623990/free-photo-of-blue-tit-dreamy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc:"It is an Initiative at our TnP cell. With the help of this project we will be able to attract small scall business and early stage startups to our college for onCampus placements. It is like a one Stop solution for inviting companies to our campus and give our student challenging tasks on the basis of which they can alayze students at there comfortable place without any wastage of cost"
  },
  {
    id:2,
    title:"Cure Cart",
    
    img:"https://images.pexels.com/photos/20567522/pexels-photo-20567522/free-photo-of-an-aerial-view-of-the-lake-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc:"It is a medicine selling Website, where we sell cheap medicine based on our algorithm which compare prices with market. Its a full Stack Project that is built right from selecting medicine according to prescription from doctors till payments.We can proudly say that we have built one stop solution for all basic medical needs"
  },
  {
    id:3,
    title:"Store Api",
    img:"https://images.pexels.com/photos/10834393/pexels-photo-10834393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc:"Its a backend API, which is built to manage all the hasale work of a Store Keeper easily. It manages its stock, which is available, which is sold, which has most demand everything that can increase his productivity. I have tested it with 2 Store Owner, And there result have been positive. "
  },
  {
    id:4,
    title:"Task Keeper",
    img:"https://images.pexels.com/photos/20436786/pexels-photo-20436786/free-photo-of-a-snow-capped-mountain-with-purple-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc:"It is a MERN stack project, Also called as Todo-List. This is based on basic CRUD operation usage. It also uses JWT authentication to make it little better version of a todo list. It was made with an intent of learning Basic projects"
  }
  
]

const Single=({item})=>{
  const ref=useRef()
  const {scrollYProgress}=useScroll({
    target:ref,
    // offset:["end end","start start"],
  });

  const y=useTransform(scrollYProgress,[0,1],[-100,100])

  return(
    <section >
      <div className='container' id='portfolio'>
        <div className="wrapper">
          <div className='image-container' ref={ref}>
          <img src={item.img} alt='' />
          <button>See Demo</button> 
          </div>
          
          <motion.div className='text-container' style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
                        
          </motion.div>
          </div>
      </div>
    </section>
  )
}
const Portfolio = () => {

  const ref=useRef()

  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["end end","start start"],
  });

  const scaleX=useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  });
  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
          <h1>Featured Works</h1>
          <motion.div style={{scaleX}} className='progressBar'></motion.div>
      </div>

      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
    
  )
}

export default Portfolio