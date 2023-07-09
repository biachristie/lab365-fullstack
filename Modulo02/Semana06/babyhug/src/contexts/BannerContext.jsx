import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const BannerContext = createContext({
    banner: {
        title:'',
        subtitle: ''
    },
    setBanner: () => {}
})

export const BannerProvider = ({ children }) => {
    const [banner, setBanner] = useState('')

    return(
        <BannerContext.Provider value={ { banner, setBanner } }>
            { children }
        </BannerContext.Provider>
    )
}

BannerProvider.propTypes = {
    children: PropTypes.node.isRequired
}