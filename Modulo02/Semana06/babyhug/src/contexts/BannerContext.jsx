import { createContext, useState } from "react";

export const BannerContext = createContext({
    title:'',
    setTitle: () => {},
    subtitle: '',
    setSubtitle: () => {}
})

export const BannerProvider = (props) => {
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')

    return(
        <BannerContext.Provider value={ { title, setTitle, subtitle, setSubtitle } }>
            { props.children }
        </BannerContext.Provider>
    )
}