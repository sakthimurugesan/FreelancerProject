import '../style/Home2.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home2() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace the URL with your server endpoint
                const response = await axios.get('http://localhost:3000/profile');
                
                // Filter the data where trend is true
                const trendingData = response.data.filter((item) => item.trend === "true");
                
                setData(trendingData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);
    
    return(
        <>
          <section id="one">

<div class="content">
    <div class="text-content">
        <h1 class="white">Providing Platform
            For <strong>FreeLancer</strong>
        </h1>
        <h4 class="blackish">We concern about your success</h4>
        <div class="two-button">
            <a href="/"><button class="w-btn btn">Find FreeLancer</button></a>
        </div>

    </div>
    </div>
</section>
<center style={{
    marginTop:"25px"
}}><h1>Top Employees</h1></center>
<div className="main-outer-div">
               <div className="card-outer-div">
             {data.map(freelancer=>(
                 <div className="card-div">
                 <div className="card-img">
                     <img src={'/img/'+freelancer.img_name}></img>
                 </div>
                 <div className="card-details">
                     <p> <strong>Name : {freelancer.name}</strong></p>
                    
                     <p>Skills</p>
                     <ul>
                     {freelancer.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
                         
                     </ul>
                     <a href={'/freelancer/'+freelancer.id}>
                     <button class="button-7" role="button">Hire</button>
                     </a>
                 </div>

             </div>
             ))}
               </div>
            </div>
<section id="four" class="goblack">
<article>
    <h1>Happy Customers</h1>
    <p>We are delighted to hear that you are a happy customer! Your satisfaction is our ultimate goal, and we appreciate your trust in our platform. It's customers like you who inspire us to continually improve and deliver exceptional experiences.</p>
    <p>Your success and happiness are at the heart of what we do, and we look forward to serving you with the same level of excellence in all your future endeavors. Thank you for choosing us as your preferred freelancing platform – your contentment is our greatest reward!</p>

    <div class="article__icon">
        <div class="customer__info">
            <span><i class="fas fa-user-plus"></i> 100K+</span>
            <pre>         Customers</pre>
        </div>

        <div class="customer__info">
            <span><i class="fas fa-thumbs-up"></i> 100%</span>
            <pre>        Satisfaction</pre>
        </div>
    </div>
</article>

<div class="four__info">
    <div class="some__info">
        <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/testi1.jpg" alt="" /></span>
        <div class="four__text">
      
            <p>
              I love the variety of freelancers on your platform, but it's sometimes challenging to find the right one for my project.
                
            </p>

            <h4>Mario Spe</h4>
        </div>
    </div>

    <div class="some__info">
        <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/testi2.jpg" alt="" /></span>
        <div class="four__text">
           
            <p>
              I've had a positive experience overall, but communication with freelancers could be improved. It would be great to have more tools for real-time collaboration. 
            </p>
            <h4>Petey Cru</h4>
        </div>
    </div>

</div>

</section>

<section id="six">
<h5>Free World</h5>
<h1>Our Team Is Filled With Highly Dedicated FreeLancers</h1>

<button class="btn w-btn">Read More</button>

</section>

        </>
    )
}