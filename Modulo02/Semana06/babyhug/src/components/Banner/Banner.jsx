import { useContext } from 'react';
import PropTypes from 'prop-types'

import { BannerContext } from '../../contexts/BannerContext'

import './Banner.css'

function Banner() {
    const { title, subtitle } = useContext(BannerContext)

    return(
        <div className="banner">
            <span id='banner-subtitle'>{ subtitle }</span>
            <h1 id='banner-title'>{ title }</h1>
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default Banner