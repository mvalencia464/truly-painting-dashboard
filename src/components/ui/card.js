import React from 'react';
import PropTypes from 'prop-types';
import './card.css'; // Assuming you have some styles for the card

const Card = ({ title, description, imageUrl, contactInfo }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <p className="card-contact">{contactInfo}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    contactInfo: PropTypes.string.isRequired,
};

export default Card;
