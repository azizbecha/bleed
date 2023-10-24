import AOSWrapper from "@/components/AOSWrapper";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ProductsRow } from "@/components/ProductsRow";

export default function Product() {
    return (
        <AOSWrapper>
            <Navbar />
            <Container>
                <ProductsRow />
            </Container>
            <Footer />
        </AOSWrapper>
    )
}