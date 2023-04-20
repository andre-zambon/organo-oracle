import "./Banner.css"
import {Fragment} from 'react'


function Banner () {
    return (
        //fragment pode ser usado para agrupar elementos sem que apareça no don
        <Fragment> 

        <header>
            <img src="/imagens/banner.png" className="banner"></img>
        </header>

        {/* h1 está dentro do fragment */}
        <h1>teste</h1> 
        
        </Fragment>
    )
}

export default Banner