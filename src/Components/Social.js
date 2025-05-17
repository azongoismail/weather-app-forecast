import { FaFacebook,FaInstagram,FaTwitter,FaWhatsapp } from "react-icons/fa";
import '../App.css';
const Social = () => {
    return ( 
        <div className="social">
            <div className="copyright">
                <p>Lorem, ipsum dolor</p>
                <p>&copy;2024</p>
            </div>
            <div className="socialHandles">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaWhatsapp /></a>
            </div>
        </div>
     );
}
 
export default Social;