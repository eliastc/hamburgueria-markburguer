import { formatPrice } from "./helpers";

type Propos = {
    amount: number;
    totalPrice: number;
    onSubmit: () => void;
}

function OrderSummary({ amount, totalPrice, onSubmit }: Propos) {
return (
    <div className="order-summary-container">
        <div className="order-summary-content">
            <div>
                <span className="amount-selected-container">
                    <strong className="amount-selected">{amount}</strong>
                    Produtos selecionados
                </span>
                <span className="order-summary-total">
                    <strong className="amount selected">{formatPrice(totalPrice)}  </strong>
                      valor total
                </span>
            </div>
            <button 
                className="order-summary-make-order"
                onClick={onSubmit}>
                    enviar pedidos
            </button>
        </div>
    </div>
)
}

export default OrderSummary;