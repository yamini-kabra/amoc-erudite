import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
     src:'/assets/images/m1.png',
     altText: 'Slide 1'
    },
    {
      src: '/assets/images/m2.png',
      altText: 'Slide 2'
    },
    {
      src:'/assets/images/m3.png',
      altText: 'Slide 3'
    }
  ];
 
  const Example = () => <UncontrolledCarousel items={items} />;

  export default Example;