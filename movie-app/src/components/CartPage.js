import MediaList from "./MediaList";

function CartPage({cartItems}) {
    console.log(cartItems);
    return (
        <>
            <h1>Cart Page</h1>
           <MediaList listMovies={cartItems}/>
        </>
    )
}
export default CartPage;