import { useContext } from 'react';
import styled from 'styled-components'

import { ProductModalContext } from "../../contexts/ProductModalContext";
import Button from '../Button/Button';

const Modal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContainer = styled.div`
    width: 550px;
    border-radius: 10px;
    background-color: #fff;
    color: var(--color-porcelain);
`

const ModalTitle = styled.span`
    display: inline-block;
    width: 100%;
    color: #535353;
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    border-bottom: 1px solid var(--color-porcelain);
    padding: 10px 0;
    margin: 20px 0;
`

const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 25px 10px;
`

const ModalBody = styled.div`
    margin: 0 25px;
`

const ModalBodyImg = styled.img`
    height: auto;
    width: 500px;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 10px;
`

const ModalBodyP = styled.p`
    text-align: justify;
`

const InfoList = styled.div`
    margin-top: 15px;

    && li::before {
        content: '●';
        color: var(--color-mint);
        font-size: 25px;
        line-height: 20px;
        padding-right: 10px;
        margin-left: 15px;
    }
`

const SpecList = styled.div`
    margin-top: 15px;

    && li::before {
        content: '●';
        color: var(--color-mint);
        font-size: 25px;
        line-height: 20px;
        padding-right: 10px;
        margin-left: 15px;
    }
`

const ModalBtns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-top: 1px solid var(--color-porcelain);
    padding-top: 20px;
    margin: 20px 25px;
    gap: 10px;
`

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
        <Modal className="productModal">
            <ModalContainer className="productModal-container">
                <ModalTitle className="productModal-title">Detalhes do Produto</ModalTitle>
                <ModalHeader className="productModal-header">
                    <h2 className="productModal-product">{ data.productName || 'titulo' }</h2>
                    <span className="productModal-price" >R$ { data.price || '9999.99' }</span>
                </ModalHeader>
                <ModalBody className="productModal-body">
                    <ModalBodyImg src={ data.photo } alt={ data.photoDescription || 'Lorem ipsum'} />
                    <ModalBodyP>{ data.productDescription || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi facilis nemo aperiam nobis porro asperiores fuga obcaecati atque sed id ratione perspiciatis quidem exercitationem, aspernatur odio sapiente illum corporis.' }</ModalBodyP>
                    <div className="productModal-lists">
                        <InfoList className="info-list">
                            <h4>Informações</h4>
                            <ul>
                                <li>{ data.productInfoList[0] || 'lista' }</li>
                                <li>{ data.productInfoList[1] || 'lista' }</li>
                                <li>{ data.productInfoList[2] || 'lista' }</li>
                                <li>{ data.productInfoList[3] || 'lista' }</li>
                            </ul>
                        </InfoList>
                        <SpecList className="spec-list">
                            <h4>Ficha Técnica</h4>
                            <ul>
                                <li>{ data.productSpecList[0] || 'lista' }</li>
                                <li>{ data.productSpecList[1] || 'lista' }</li>
                                <li>{ data.productSpecList[2] || 'lista' }</li>
                                <li>{ data.productSpecList[3] || 'lista' }</li>
                            </ul>
                        </SpecList>
                    </div>
                </ModalBody>
                <ModalBtns className="productModal-btns">
                    <Button onClick={ handleCloseModal } value="Fechar" />
                    <Button value="Comprar" />
                </ModalBtns>
            </ModalContainer>
        </Modal>
    );
}

export default ProductModal