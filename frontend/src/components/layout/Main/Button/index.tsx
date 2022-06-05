import { StyledButton } from "assets/styles/globals";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { FormattedMessage } from "react-intl";
import { addItem, removeItem } from "store/cart/cart.slice";

interface ButtonProps {
  id: number;
  img: string;
  name: string;
  price: number;
}

const Button: React.FC<ButtonProps> = ({ img, name, price, id }) => {
  const dispatch = useAppDispatch();

  const { cart } = useAppSelector((state) => state.cartReducer);

  const isExistsInCart = cart.some((p) => p.id === id);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isExistsInCart) {
      dispatch(addItem({ id, name, price, img }));
    } else {
      dispatch(removeItem({ id, price }));
    }
  };

  return (
    <>
      {isExistsInCart ? (
        <StyledButton onClick={handleClick}>
          <FormattedMessage id="remove" />
        </StyledButton>
      ) : (
        <StyledButton onClick={handleClick}>
          <FormattedMessage id="add" />
        </StyledButton>
      )}
    </>
  );
};

export default Button;
