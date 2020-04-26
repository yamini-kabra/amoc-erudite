import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const slides = [
    {
     src:'/assets/images/b1.png',
     altText: 'Slide 1'
    },
    {
      src: '/assets/images/b2.png',
      altText: 'Slide 2'
    },
    {
      src:'/assets/images/b3.png',
      altText: 'Slide 3'
    },
    {
        src:'/assets/images/b4.png',
        altText: 'Slide 4'
    },
    {
        src:'/assets/images/b5.png',
        altText: 'Slide 5'
    }
  ];
 
  const Example1 = () => <UncontrolledCarousel items={slides} />;

  export default Example1;