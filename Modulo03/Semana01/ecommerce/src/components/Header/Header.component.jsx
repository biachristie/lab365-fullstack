import { useContext } from "react"
import Badge from '@mui/joy/Badge'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import ListItemButton from '@mui/joy/ListItemButton'
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import Input from '@mui/joy/Input'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'

import { CartContext } from "../../context/Cart/Cart.context"

export default function Header() {
    const { cartItems } = useContext(CartContext)

    return (
        <Box component="nav" aria-label="NOME" sx={{ flexGrow: 1, backgroundColor: "#C41C1C" }}>
            <List
                role="header"
                orientation="horizontal"
                sx={{ 
                    display: "flex", 
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "10px 0 30px",
                }}
                color="danger"
            >
                <ListItem role="none">
                    <ListItemButton
                        role="brandlogo"
                        component="a"
                        href="#navigation-menu"
                    >
                        <ListItemDecorator>
                            Inserir LOGO
                        </ListItemDecorator>
                    </ListItemButton>
                </ListItem>
                <ListItem role="searchbar">
                    <Input
                        placeholder="Filtrar produtos"
                        endDecorator={ 
                            <Button 
                                color="neutral" 
                                variant="plain"
                            >
                                <Search />
                            </Button> 
                        }
                    />
                </ListItem>
                <ListItem role="none">
                    <ListItemButton
                        role="menuitem"
                        component="a"
                        href="#navigation-menu"
                        aria-label="Shopping Cart"
                    >
                        <Badge 
                            variant="outlined" 
                            color="primary" 
                            badgeContent={ cartItems.length }
                        >
                            <ShoppingCartOutlined />
                        </Badge>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}