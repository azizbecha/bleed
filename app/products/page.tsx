import AOSWrapper from "@/components/AOSWrapper";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ProductsRow } from "@/components/ProductsRow";
import { Title } from "@/components/Title";

export default function Products() {
    return (
        <AOSWrapper>
            <Navbar />
            <Container>
                <div className="flex justify-center text-center">
                    <div>
                        <Title title="Products" />
                        <ProductsRow />
                    </div>
                </div>
            </Container>
            <Footer />
        </AOSWrapper>
    )
}