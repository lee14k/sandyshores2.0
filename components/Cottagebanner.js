import React from 'react';
import PropTypes from 'prop-types';
import './cottagebanner.css'

const CottageBanner = ({ imageSrc }) => {
  return <img src={imageSrc} alt="Cottage Banner" className="cottage-banner" />;
};

CottageBanner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default CottageBanner;
