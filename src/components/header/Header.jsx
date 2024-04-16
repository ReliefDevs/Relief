import "./header.css"
import NavBar from '../navbar/NavBar'


export function Header(){
    return(
        <section className="header">
            <NavBar/>
            <div className="header-h3">
                <h3>Servicios de innovación</h3>
            </div>
            <div className="header-layout">
                <div className="header-layout-left">
                    <h1>Somos<br /><span>Relief;</span></h1>
                </div>
            </div>
            <div className="header-layout-right">
                Una sensación de alivio, potenciando los objetivos comerciales a través de la <strong>tecnología</strong>, la <strong>innovación</strong> y <strong>seriedad</strong>
            </div>
            <p className="header-layout-left-legend">Comienza tu proyecto ahora!</p>
        </section>
    )
}


export default Header;