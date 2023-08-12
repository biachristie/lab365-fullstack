import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const SearchContext = createContext({
    searchedTerm: "",
    setSearchedTerm: () => {},
})

export const SearchProvider = ({ children }) => {
    const [searchedTerm, setSearchedTerm] = useState("")

    return(
        <SearchContext.Provider value={{ searchedTerm, setSearchedTerm }}>
            { children }
        </SearchContext.Provider>
    )
}

SearchProvider.propTypes = {
    children: PropTypes.node
}