import { useOutletContext } from "react-router-dom";

export default function CartPage() {
    const [cartItems, setCartItems] = useOutletContext();
    console.log(cartItems);

    return (
        <div>
            Hello World!
        </div>
    )
}