import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/UseCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfimartionSection } from "./ConfimartionSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCofees() {
    const { cartItems } = useCart();
    return (
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés selecionados
            </TitleText>

            <DetailsContainer>
                {cartItems.map((item) => (
                    <CoffeeCartCard key={item.id} coffee={item}/>
                ))}
                <ConfimartionSection />
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}