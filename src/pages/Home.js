import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is a protected page accessible after login.</p>
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div><img src="image1.png" alt="Image 1" /></div>
                <div><img src="image2.png" alt="Image 2" /></div>
                <div><img src="image3.png" alt="Image 3" /></div>
                <div><img src="image4.png" alt="Image 4" /></div>
            </Carousel>
        </div>
    );
}

export default Home;