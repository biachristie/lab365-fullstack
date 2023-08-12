import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Button, ButtonGroup, Stack } from "@mui/material";

export default function CartProductCard({
    productImage,
    productName,
    productQuantity,
    productCurrency,
    productPrice
}) {
    return (
        <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
                maxWidth: "100%",
                "&:hover": { boxShadow: "md", borderColor: "neutral.outlinedHoverBorder" },
            }}
        >
            <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                    src={ productImage }
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
            <CardContent 
                sx={{ 
                    display: "grid", 
                    gridTemplateColumns: "3fr 1fr 1fr", 
                    alignItems: "center" 
                }}
            >
                <Typography level="title-lg" id="card-title">
                    { productName }
                </Typography>
                <Stack spacing={2}>
                    <ButtonGroup 
                        variant="plain" 
                        aria-label="card-item-group"
                        sx={{ border: "1px solid lightgray", justifyContent: "center" }}
                    >
                        <Button>-</Button>
                        <Button disabled>{ productQuantity }</Button>
                        <Button>+</Button>
                    </ButtonGroup>
                </Stack>
                <Typography 
                    level="title-lg" 
                    id="card-price"
                    sx={{ textAlign: "center" }}
                >
                    { productCurrency } { productPrice }
                </Typography>
            </CardContent>
        </Card>
    )
}