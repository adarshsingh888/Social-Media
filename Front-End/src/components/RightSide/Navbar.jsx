import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faGear ,faBell,faMessage } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  console.log("Navbar rendered")
  return (
    <nav className=" p-4 w-full">
      <ul className="flex justify-around text-white font-bold ">
        <li>
          <Link to="/home" className="hover:text-gray-300"><FontAwesomeIcon icon={faHome} className='text-2xl'/></Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-gray-300"><FontAwesomeIcon icon={faGear} className='text-2xl'/></Link>
        </li>
        <li>
          <Link to="/register" className="hover:text-gray-300"><FontAwesomeIcon icon={faBell} className='text-2xl'/></Link>
        </li>
        <li>
          <Link to="/home/feed" className="hover:text-gray-300"><FontAwesomeIcon icon={faMessage} className='text-2xl'/></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
