import { createContext, useState } from "react";
import PropTypes from 'prop-types'

import ProductModal from '../../src/components/ProductModal/ProductModal';

export const ProductModalContext = createContext({
    show: false,
    setShow: () => {},
    data: {
        photo: '',
        photoDescription: '',
        price: '',
        productName: '',
        productDescription: '',
        productInfoList: [],
        productSpecList: [],
    },
    setData: () => {}
})

export const ProductModalProvider = ({ children }) => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState({
        photo: '',
        photoDescription: '',
        price: '',
        productName: '',
        productDescription: '',
        productInfoList: [],
        productSpecList: [],
    })

    return(
        <ProductModalContext.Provider value={ { show, setShow, data, setData } }>
            { children }
            { show && <ProductModal /> }
        </ProductModalContext.Provider>
    )
}

ProductModalProvider.propTypes = {
    children: PropTypes.node.isRequired
}