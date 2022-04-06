import { checkIsSelected } from "./helpers";
import ProdutoCard from "./ProdutoCard";
import { Product } from "./types";

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (Product: Product) => void;
}

function ListaProdutos({ products, selectedProducts, onSelectProduct }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
              {products.map(product => (
                  <ProdutoCard 
                    key={product.id}
                    product={product}
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectedProducts, product)} />
              ))}
              
            </div>
        </div>
    )
}

export default ListaProdutos;