import React from 'react'
import './slideshow.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Slideshow() {
  return (
    <Carousel showIndicators={true} showThumbs={false} showArrows={true}>
      <div>
        <img src="https://takenfree.com/public/uploads/all/UfJiR7UiEHhsk9HeBFH1j1uGcPDc5qR7Es4EJ5iX.jpg" />
      </div>
      <div>
        <img src="https://takenfree.com/public/uploads/all/cEYa1cGAgDkgxUoE9VsxH8NU8JGawhVYiIHeqofM.jpg" />
      </div>
      <div>
        <img src="https://takenfree.com/public/uploads/all/x5cfWBYgRoVgUJkl4CPRe1tQb7sP79rYw83Br1pY.jpg" />
      </div>
    </Carousel>
  );
}
