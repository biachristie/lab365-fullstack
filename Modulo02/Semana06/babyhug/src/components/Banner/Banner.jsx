import PropTypes from 'prop-types'

import './Banner.css'

function Banner({ title, subtitle }) {
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