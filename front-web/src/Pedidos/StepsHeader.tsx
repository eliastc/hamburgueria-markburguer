

function StepsHeader() {
    return(
        <header className='orders-steps-container'>
            <div className='orders-steps-content'>
                <h1 className='steps-title'>
                    Selecione <br /> os itens
                </h1>
                <ul className='steps-items'>
                    <li>
                        <span className='steps-number'>1</span>
                        Selecione os produtos e sua localização.
                    </li>
                    <li>
                        <span className='steps-number'>2</span>
                        Click em  <strong>"enviar pedidos"</strong>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default StepsHeader;