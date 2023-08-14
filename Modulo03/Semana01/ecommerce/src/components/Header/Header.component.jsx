import { useContext, useRef } from "react"
import Badge from "@mui/joy/Badge"
import Box from "@mui/joy/Box"
import Button from "@mui/joy/Button"
import List from "@mui/joy/List"
import ListItem from "@mui/joy/ListItem"
import ListItemButton from "@mui/joy/ListItemButton"
import ListItemDecorator from "@mui/joy/ListItemDecorator"
import Input from "@mui/joy/Input"
import { Search, ShoppingCartOutlined } from "@mui/icons-material"

import { CartContext } from "../../context/Cart/Cart.context"
import { SearchContext } from "../../context/Search/Search.context"

export default function Header({ hideSearch }) {
    const { totalCartItems } = useContext(CartContext)
    const { setSearchedTerm } = useContext(SearchContext)

    const inputRef = useRef()

    const onSearch = () => { 
        const inputValue = inputRef.current.value
        setSearchedTerm(inputValue)
    }

    return (
        <Box 
            component="nav" 
            aria-label="NOME" 
            sx={{ 
                backgroundColor: "#C41C1C", 
                padding: "10px 5px",
                marginBottom: "30px" 
            }}
        >
            <List
                role="header"
                orientation="horizontal"
                sx={{ 
                    display: "flex", 
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
                color="danger"
            >
                <ListItem role="none">
                    <ListItemButton
                        role="brandlogo"
                        component="a"
                        href="/produtos"
                    >
                        <ListItemDecorator>
                            Inserir LOGO
                        </ListItemDecorator>
                    </ListItemButton>
                </ListItem>
                <div role="searchbar" hidden={ hideSearch }>
                    <Input
                        placeholder="Filtrar produtos"
                        size="sm"
                        slotProps={{
                            input: {
                                ref: inputRef
                            }
                        }}
                        endDecorator={ 
                            <Button 
                                color="neutral" 
                                variant="plain"
                                onClick={ onSearch }
                            >
                                <Search />
                            </Button> 
                        }
                    />
                </div>
                <ListItem role="none">
                    <ListItemButton
                        role="menuitem"
                        component="a"
                        href="/carrinho"
                        aria-label="Shopping Cart"
                    >
                        <Badge 
                            variant="outlined" 
                            color="primary" 
                            badgeContent={ totalCartItems }
                        >
                            <ShoppingCartOutlined />
                        </Badge>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}