import { FaEye, FaShoppingCart } from "react-icons/fa"

interface Props {
    title: string,
    description: string,
    image: string,
    available: boolean
}

export const ProductCard: React.FC<Props> = (props) => {
    return (
        <div className="bg-white p-0.5 mb-3 border-inherit border-2 w-full border-black" data-aos="zoom-out">
            {
                !props.available ? (
                    <div className="absolute w-15 bg-white text-red font-semibold text-sm px-2">
                        Sold out
                    </div>
                ) : (
                    <div className="absolute w-15 bg-white text-green font-semibold text-sm px-2">
                        On Stock
                    </div>
                )
            }
            <img src={props.image} alt="Image 1" className="w-full h-96" />

            <div className="p-4">
                <h2 className="font-bold font-mono text-xl mt-2 mb-2">{props.title}</h2>

                <p className="text-justify">
                    {props.description}
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