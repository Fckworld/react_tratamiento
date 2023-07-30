import React from 'react';

const NavButton = ({ link, text }) => {
  return (
    <a href={link} className="text-white hover:text-gray-300 mx-5">{text}</a>
  );
};

export default NavButton;
