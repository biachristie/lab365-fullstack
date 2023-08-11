import * as React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Link from '@mui/joy/Link'
import Typography from '@mui/joy/Typography'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

export default function ProductCard({ productImage, productCategory, productName, productCurrency, productPrice }) {
    return (
        <Card sx={{ width: 200, maxWidth: '100%', boxShadow: 'lg' }}>
        <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
            <img
                src={ productImage }
                loading="lazy"
                alt=""
            />
            </AspectRatio>
        </CardOverflow>
        <CardContent>
            <Typography 
                level="body-xs"
                sx={{ textTransform: 'capitalize' }}
            >
                { productCategory }
            </Typography>
            <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={ <ArrowOutwardIcon /> }
            >
                { productName }
            </Link>

            <Typography
                level="title-lg"
                sx={{ mt: 1, fontWeight: 'xl' }}
            >
                { productCurrency} { productPrice }
            </Typography>
        </CardContent>
        <CardOverflow>
            <Button variant="solid" color="danger" size="lg">
                Adicione ao carrinho
            </Button>
        </CardOverflow>
        </Card>
    )
}
