import React from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';
import { ReactComponent as SearchIcon } from '../assets/ic-search.svg';


/**
 * Primary UI component for user interaction
 */
export const SearchBox = ({action, placeholder, ...props }) => {
  return (
    <div className="search-wrap" {...props}>
      <form action={action} method="get">
          <div className="react-autosuggest__container" role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false">
              <div className="input-group search-group">
                <SearchIcon className="icon ic-search"/>
                <div className="input-wrapper">
                  <input className="form-control search" type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" placeholder={placeholder} name="q"/>
                </div>
              </div>
              <div className="clip-header"></div>
          </div>
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  // form action
  action: PropTypes.string.isRequired,
  /**
   * Search placeholder
   */
  placeholder: PropTypes.string.isRequired,
};

SearchBox.defaultProps = {
  action: "",
  placeholder: 'Search for a book',
};
