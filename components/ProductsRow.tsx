import { ProductCard } from "./ProductCard"

export const ProductsRow: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-5 text-center mx-auto text-black w-full">
            <ProductCard image={"../ala.jpg"} available={false} title={"BLEED WHITE TEE"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti sunt facere? Deserunt ullam esse ipsam sint nostrum"} />
            <ProductCard image={"../hoodie.jpg"} available={true} title={"BLEED HOODIE"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti sunt facere? Deserunt ullam esse ipsam sint nostrum"} />
            <ProductCard image={"../cagoule.jpg"} available={false} title={"BLEED BALACLAVA"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti sunt facere? Deserunt ullam esse ipsam sint nostrum"} />
        </div>
    )
}