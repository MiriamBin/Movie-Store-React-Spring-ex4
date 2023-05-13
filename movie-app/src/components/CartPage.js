import MediaList from "./MediaList";

function CartPage({cartItems}) {
    return (
        <>
           <MediaList listMovies={cartItems}/>
        </>
    )
}
export default CartPage;