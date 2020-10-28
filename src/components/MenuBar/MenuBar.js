import React from 'react';
import PropTypes from 'prop-types';

import './MenuBar.css';

/**
 * Primary UI component for user interaction
 */
export const MenuBar = ({items, color, ...props }) => {
  return (
    <div className="menu-bar">
      <nav className="menu-bar-inner nav-bar">
        <ul className="pri nav">
          {
            items.map((item, index) => (
              <li key={index} className="nav-item"><a style={color && {color}} className="nav-link text-upper text-light" href="/">{item}</a></li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
};

MenuBar.propTypes = {
  // nav item
  items: PropTypes.array.isRequired,
  color: PropTypes.string,
};

MenuBar.defaultProps = {
  items: ['Home', 'Users', 'Books', 'Transactions', 'Seller Channel'],
  color: '#ccc',
};
