import './styles.css';
import { ReactComponent as EntregaImg } from './entrega.svg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='home-container'>
                <div className='home-content'>
                    <div className='home-actions'>
                        <h1 className='home-title'>
                            Faça seu pedido  que entregamos <br /> até voce!
                        </h1>
                        <h3 className='home-subtitle'>Escolha o seu pedido e em poucos
                            minutos <br /> levaremos até seu endereço
                        </h3>
                        <Link to ='/pedidos' className='home-btn-order'>Faça seu pedido</Link>

                    </div>
                    <div className='home-image'> <EntregaImg /></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;