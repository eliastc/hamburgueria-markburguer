import './styles.css'
import { ReactComponent as FaceIcon } from './face.svg'

function Footer() {
    return(
       <footer className='main-footer'>
           MarkBurguer sempre pensando em voce!
           <div className='footer-icons'>
               <a href='https://pt-br.facebook.com/matsburguer/' target='_new'>
                   <FaceIcon />
               </a>
           </div>
       </footer>
    )
}

export default Footer;