import { useContext } from 'react';
import PropTypes from 'prop-types'

import { BannerContext } from '../../contexts/BannerContext'

import './Banner.css'

function Banner() {
    const { banner } = useContext(BannerContext)

    return(
        <div className="banner">
            <span id='banner-subtitle'>{ banner.subtitle }</span>
            <h1 id='banner-title'>{ banner.title }</h1>
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Banner