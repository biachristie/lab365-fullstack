import * as React from "react"
import { useNavigate } from "react-router-dom"
import Button from "@mui/joy/Button"
import Card from "@mui/joy/Card"
import CardContent from "@mui/joy/CardContent"
import Typography from "@mui/joy/Typography"
import { ButtonGroup, Stack } from "@mui/material"

export default function CartTotalCard({ 
    cartTotal
}) {
    const navigate = useNavigate()

    return (
        <Card 
            variant="outlined"
            sx={{ 
                minWidth: 300,
                maxWidth: "100%", 
                height: 200,
                boxShadow: "md" 
            }}
        >
            <CardContent>
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
            <Stack spacing={2}>
                <ButtonGroup 
                    variant="plain" 
                    aria-label="card-item-group"
                    sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                    <Button 
                        color="danger" 
                        sx={{ display: "block", width: "100%" }}
                        onClick={ () => navigate("/produtos") }
                    >
                        Continuar comprando
                    </Button>
                    <Button 
                        color="danger" 
                        sx={{ display: "block", width: "100%" }}
                    >
                        Finalizar compra
                    </Button>
                </ButtonGroup>
            </Stack>
        </Card>
    )
}
