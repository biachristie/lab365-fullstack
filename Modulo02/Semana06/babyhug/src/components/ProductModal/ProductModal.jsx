import { useContext } from 'react';

import { ProductModalContext } from "../../contexts/ProductModalContext";
import Button from '../Button/Button';

import "./ProductModal.css"

function ProductModal() {
    const { setShow, data, setData } = useContext(ProductModalContext)

    const handleCloseModal = () => {
        setShow(false)
        setData({
            photo: null,
            photoDescription: null,
            price: null,
            productName: null,
            productDescription: null,
            productInfoList: [],
            productSpecList: [],
        })
    }

    return (
        <div className="productModal">
            <div className="productModal-container">
                <span className="productModal-title">Detalhes do Produto</span>
                <div className="productModal-header">
                    <h2 className="productModal-product">{ data.productName || 'titulo' }</h2>
                    <span className="productModal-price" >R$ { data.price || '9999.99' }</span>
                </div>
                <div className="productModal-body">
                    <img src={ data.photo } alt={ data.photoDescription || 'Lorem ipsum'} />
                    <p>{ data.productDescription || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi facilis nemo aperiam nobis porro asperiores fuga obcaecati atque sed id ratione perspiciatis quidem exercitationem, aspernatur odio sapiente illum corporis.' }</p>
                    <div className="productModal-lists">
                        <div className="info-list">
                            <h4>Informações</h4>
                            <ul>
                                <li>{ data.productInfoList[0] || 'lista' }</li>
                                <li>{ data.productInfoList[1] || 'lista' }</li>
                                <li>{ data.productInfoList[2] || 'lista' }</li>
                                <li>{ data.productInfoList[3] || 'lista' }</li>
                            </ul>
                        </div>
                        <div className="spec-list">
                            <h4>Ficha Técnica</h4>
                            <ul>
                                <li>{ data.productSpecList[0] || 'lista' }</li>
                                <li>{ data.productSpecList[1] || 'lista' }</li>
                                <li>{ data.productSpecList[2] || 'lista' }</li>
                                <li>{ data.productSpecList[3] || 'lista' }</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="productModal-btns">
                    <Button onClick={ handleCloseModal } value="Fechar" />
                    <Button value="Comprar" />
                    {/* <button onClick={ handleCloseModal }>Fechar</button>
                    <button>Comprar</button> */}
                </div>
            </div>
        </div>
    );
}

export default ProductModal