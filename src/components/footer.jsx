import '../css/footer.css'
import adidaslogo from '../assets/adidas-8.svg'
import dclogo from '../assets/dc-shoe-co-usa.svg'
import dunloplogo from '../assets/dunlop-sport.svg'
import nikelogo from '../assets/nike-8.svg'
import pradalogo from '../assets/prada.svg'
import reeboklogo from '../assets/reebok-2019-logo.svg'
import vanslogo from '../assets/vans-3.svg'
import volcomlogo from '../assets/volcom-2.svg'

function Footer() {
    return (
        <div className="footer-div">
            <div className="logo-slide">
                <img className="logo" src={adidaslogo} alt="adidas logo" />
                <img className="logo" src={dclogo} alt="dc logo" />
                <img className="logo-2" src={dunloplogo} alt="dunlop logo" />
                <img className="logo" src={nikelogo} alt="nike logo" />
                <img className="logo-3" src={reeboklogo} alt="reebok logo" />
                <img className="logo-3" src={vanslogo} alt="vans logo" />
                <img className="logo-3" src={volcomlogo} alt="volcom logo" />
            </div>
            <div className="logo-slide">
                <img className="logo" src={adidaslogo} alt="adidas logo" />
                <img className="logo" src={dclogo} alt="dc logo" />
                <img className="logo-2" src={dunloplogo} alt="dunlop logo" />
                <img className="logo" src={nikelogo} alt="nike logo" />
                <img className="logo-3" src={reeboklogo} alt="reebok logo" />
                <img className="logo-3" src={vanslogo} alt="vans logo" />
                <img className="logo-3" src={volcomlogo} alt="volcom logo" />
            </div>
        </div>

    )
}

export default Footer;