import { useOutletContext } from "react-router-dom";

export default function CartPage() {
    const [cartItems, setCartItems] = useOutletContext();

    return (
        <div>
            Hello World!
        </div>
    )
}