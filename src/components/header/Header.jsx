import "./header.css"


export function Header(){
    return(
        <section className="header">
            <div className="header-h3">
                <h3>Servicios de innovación</h3>
            </div>
            <div className="header-layout">
                <div className="header-layout-left">
                    <h1>Somos<br /><span>Relief;</span></h1>
                    <p className="header-layout-left-legend">Comienza tu proyecto ahora!</p>
                </div>
                <div className="header-layout-right">
                    Una sensación de alivio, potenciando los objetivos comerciales a través de la <strong>tecnología</strong>, la <strong>innovación</strong> y <strong>seriedad</strong>
                </div>
            </div>
        </section>
    )
}


export default Header;