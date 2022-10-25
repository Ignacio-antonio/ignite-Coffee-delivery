import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/UseCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./style";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
    const [quantity, setQuantity] = useState(1);

    function handleIncrease() {
        setQuantity(state => state + 1)
    }
    function handleDecrease() {
        setQuantity(state => state - 1)
    }
    
    const { addCoffeeToCart } = useCart();

    function handleAddToCort() {
        const coffeToAdd = {
            ...coffee,
            quantity,
        }
        addCoffeeToCart(coffeToAdd)
    }

    const fomarttedPrice = formatMoney(coffee.price);
    
    return (
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} />

            <Tags>
                {coffee.tags.map(tag => (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Tags>

            <Name>{coffee.name}</Name>
            <Description>
                {coffee.description}
            </Description>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">{fomarttedPrice}</TitleText> 
                </div>

                <AddCartWrapper>
                    <QuantityInput 
                      onIncrease={handleIncrease}
                      onDecrease={handleDecrease}
                      quantity={quantity}
                    />
                    <button onClick={handleAddToCort}>
                        <ShoppingCart size={22} weight="fill"/>
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    )
}