import AOSWrapper from "@/components/AOSWrapper";

import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { Container } from "@/components/Container";
import { ProductsRow } from "@/components/ProductsRow";

export default function Product() {
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