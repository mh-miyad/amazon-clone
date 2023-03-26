import React, { useState } from 'react'
import Shops from '../Pages/Shops';
import NavbarComponent from './NavbarComponent'

const Header = () => {
  const [category, setCategory] = useState('');

  const handleButtonClick = (category) => {
    setCategory(category);
  };
  return (
    <div>
        <NavbarComponent onClick={handleButtonClick} />
        <Shops category={category}/>
    </div>
  )
}

export default Header