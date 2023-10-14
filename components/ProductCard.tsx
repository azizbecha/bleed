import { FaEye, FaShoppingCart } from "react-icons/fa"

export const ProductCard: React.FC = () => {
    return (
        <div className="bg-white p-0.5">
            <div className="absolute w-15 bg-white text-red font-semibold text-sm px-2">
                Sold out
            </div>
            <img src="../ala.jpg" alt="Image 1" className="w-full h-auto" />

            <div className="p-4">
                <h2 className="font-bold font-mono text-xl mt-2 mb-2">BLEED WHITE TEE</h2>

                <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam est tenetur harum alias. Quis quidem molestias tempora.
                </p>

                <button className="w-full font-medium transition px-4 py-2 bg-primary text-white mt-3 border-2 border-primary hover:bg-white hover:border-primary hover:text-primary flex items-center justify-center">
                    <FaEye />&nbsp; See more
                </button>

                <button className="w-full font-medium transition px-4 py-2 bg-white text-primary mt-2 border-2 border-primary hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center">
                    <FaShoppingCart />&nbsp; Add to Cart
                </button>

            </div>
        </div>
    )
}