import React from 'react';
import Scard from './speaakerCard';
import photo from '../assets/spec-img1.jpeg';
// import photo1 from '../assets/logo.png';

export default function Speakers() {
  return (
    <div>
        <h1 className="py-4 text-white text-center bg-black"> Speakers</h1>

       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-black place-items-center">

        <Scard name="Arjun" post="Director" mail="th@23" number="9782341498" source={photo}/>

		<Scard name="Aryan" post="CEO" mail="aryan906@" number="87968597869" source={photo}/>

		<Scard name="Jatin" post="Manager" mail="js094@" number="574960078" source={photo}/>

		<Scard name="Ashutosh" post="Product Manager" mail="ast2345@" number="9782341498" source={photo}/>

		<Scard name="Shashank" post="SDE2" mail="ert@nith" number="9782341498" source={photo}/>

		<Scard name="Adarsh" post="Student" mail="43ref@gmail" number="9782341498" source={photo}/>




        </div>
    </div>
  )
}
