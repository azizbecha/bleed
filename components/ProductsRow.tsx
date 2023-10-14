import { ProductCard } from "./ProductCard"

export const ProductsRow: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 text-black">
            <ProductCard />
        </div>
    )
}