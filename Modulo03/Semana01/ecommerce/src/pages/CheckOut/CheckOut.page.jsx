import { useContext, useState } from "react"
import { 
    Alert, 
    Avatar, 
    Box, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    Radio, 
    RadioGroup, 
    Snackbar 
} from "@mui/material"
import Button from "@mui/joy/Button"
import Card from "@mui/joy/Card"
import CardContent from "@mui/joy/CardContent"
import Typography from "@mui/joy/Typography"

import Header from "../../components/Header/Header.component"
import { CartContext } from "../../context/Cart/Cart.context"

import "./CheckOut.page.css"

function CheckOutPage() {
    const { setCartItems, cartTotal, setTotalCartItems } = useContext(CartContext)

    const paymentOptions = [
        {
            id: 0,
            value: "credit card",
            src: "https://cdn.iconscout.com/icon/free/png-512/free-mastercard-3521564-2944982.png?f=avif&w=256",
            label: "Cartão de Crédito"
        },
        {
            id: 1,
            value: "debit card",
            src: "https://cdn.iconscout.com/icon/free/png-512/free-mastercard-3521564-2944982.png?f=avif&w=256",
            label: "Cartão de Débito"
        },
        {
            id: 2,
            value: "pix",
            src: "https://devtools.com.br/img/pix/logo-pix-png-icone-520x520.png",
            label: "Pix"
        },
        {
            id: 3,
            value: "bank payment slip",
            src: "https://www.vitoriaemcristo.org/img/icon-segunda-via-boleto.svg",
            label: "Boleto"
        }
    ]

    const renderPaymentOptions = (option) => {
        return (
            <FormControlLabel 
                key={ option.id }
                value={ option.value }
                control={
                    <Radio 
                        size="small"
                        name="radio-buttons"
                    />
                }
                label={ 
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar 
                            variant="rounded"
                            sx={{ mr: 1, width: 34, height: 34 }}
                            src={ option.src } />
                        { option.label } 
                    </Box>
                }
            >
            </FormControlLabel>
        )
    }

    const[value, setValue] = useState("")
    const[openMessage, setOpenMessage] = useState(false)

    const handleRadioChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        localStorage.clear()
        setCartItems([])
        setTotalCartItems(0)
        setOpenMessage(true)
    }

    const handleClose = () => { setOpenMessage(false) }
    return (
        <>
            <Header hideSearch={ true } />
            <div className="checkout-container">
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={ openMessage }
                    autoHideDuration={ 2000 }
                    onClose={ handleClose }
                >
                    <Alert severity="success" sx={{ width: "100%" }}>Pagamento realizado!</Alert>
                </Snackbar>
                <form 
                    className="checkout-form" 
                    onSubmit={ onSubmit }
                >
                    <FormControl
                        sx={{
                            minWidth: 240,
                            border: 1,
                            borderColor: "#CDD7E1",
                            borderRadius: 3,
                            padding: "20px"
                        }}
                    >
                        <FormLabel sx={{  }}>Como você prefere pagar?</FormLabel>
                        <RadioGroup
                            aria-labelledby="checkout-radio-buttons-group-label"
                            defaultValue="credit card"
                            name="radio-buttons-group"
                            sx={{ pl: 3, mt: 3, mb: 3 }}
                            onChange={ handleRadioChange }
                        >
                            { paymentOptions.map(renderPaymentOptions) }
                        </RadioGroup>
                        <Button 
                            color="danger" 
                            type="submit"
                            sx={{ display: "block", width: "100%" }}
                        >
                            Realizar Pagamento
                        </Button>
                    </FormControl>
                </form>
                <section className="checkout-total-card">
                    <Card 
                        variant="outlined"
                        sx={{ 
                            minWidth: 300,
                            maxWidth: "100%",
                            height: 170, 
                            borderRadius: 10,
                            boxShadow: "md"
                        }}
                    >
                        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography 
                                level="body-md"
                                sx={{ textTransform: "capitalize" }}
                            >
                                Resumo da Compra
                            </Typography>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography
                                    level="title-lg"
                                    sx={{ mt: 3, fontWeight: "xl" }}
                                >
                                    Total 
                                </Typography>
                                <Typography
                                    level="title-lg"
                                    sx={{ mt: 3, fontWeight: "xl" }}
                                >
                                    R$ { cartTotal }
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </>
    )
}

export default CheckOutPage