import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';
import DefaultCover from '../assets/book-default.svg';

export const Card = ({backgroundColor, book, ...props}) => {
  return (
    <div className="Card" style={backgroundColor && {backgroundColor}}>
      <div className="card-cover">
        <img src={book.coverUrl} alt="image"/>
      </div>
      <div className="card-body">
        <p className="card-title">{book.title}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string,
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    coverUrl: PropTypes.string,
  })
};

Card.defaultProps = {
  backgroundColor: "#fff",
  book: {
    title: null,
    coverUrl: DefaultCover,
  }
}