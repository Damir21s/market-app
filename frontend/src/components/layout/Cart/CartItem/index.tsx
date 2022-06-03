import { Images, Link, StyledButton } from "assets/styles/globals";
import { useAppDispatch } from "hooks/redux";
import { removeItem } from "store/cart/cart.slice";
import { ButtonsContainer, CartContainer } from "./style";

interface CartItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
  setOpen: (open: boolean) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  image,
  name,
  price,
  id,
  setOpen,
}) => {
  const dispatch = useAppDispatch();

  const onRemoveItem = () => {
    dispatch(removeItem({ id, price }));
  };

  return (
    <CartContainer>
      <div>
        <Images src={image} hht="6.9rem" wth="7.3rem" />
        <div>
          <div>
            <h4>{name}</h4>
            <p>{price}$</p>
          </div>
          <ButtonsContainer>
            <div>
              <Link to={`/device/${id}`}>
                <StyledButton onClick={() => setOpen(false)}>more</StyledButton>
              </Link>
            </div>
            <div>
              <StyledButton onClick={() => onRemoveItem()}>
                remove from cart
              </StyledButton>
            </div>
          </ButtonsContainer>
        </div>
      </div>
    </CartContainer>
  );
};

export default CartItem;
