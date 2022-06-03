import { Badge, Fade, IconButton, Popper, ThemeProvider } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StyledButton, theme } from "assets/styles/globals";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import ReservationProduct from "../ReserveProduct";
import { FooterContainer, HeaderContainer, СartContainer } from "./style";
import { clearCart } from "store/cart/cart.slice";
import { DeviceApi } from "services/device.service";

const Basket = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.userReducer);

  const [openCart, setOpenCart] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { cart, totalItem, totalSum } = useAppSelector(
    (state) => state.cartReducer
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenCart((previousOpen) => !previousOpen);
  };

  const onReserve = () => {
    if (user) {
      let devicesId: Array<number> = [];
      cart.forEach((el) => devicesId.push(el.id));
      DeviceApi.reserveOrder({ userId: user.id, devicesId });
      dispatch(clearCart());
    }
    setOpenCart(false);
    setOpenModal(true);
  };

  const canBeOpen = openCart && Boolean(anchorEl);

  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <div>
      <IconButton
        onClick={handleClick}
        style={{ marginRight: "1rem" }}
        color="inherit"
        aria-label="add to shopping cart"
      >
        <ThemeProvider theme={theme}>
          <Badge badgeContent={totalItem} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </ThemeProvider>
      </IconButton>
      <Popper
        placement={"bottom-end"}
        id={id}
        open={openCart}
        anchorEl={anchorEl}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={250}>
            <СartContainer>
              <HeaderContainer>
                {cart.length ? <h2>Сart</h2> : <h2>Сart is empty</h2>}
                <IconButton
                  onClick={() => setOpenCart(!openCart)}
                  style={{ position: "absolute", right: 0, margin: "5px 10px" }}
                  aria-label="delete"
                  size="small"
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              </HeaderContainer>
              {cart.length
                ? cart.map((el) => (
                    <CartItem
                      key={el.id}
                      id={el.id}
                      name={el.name}
                      price={el.price}
                      image={el.img}
                      setOpen={setOpenCart}
                    />
                  ))
                : null}
              <FooterContainer>
                <div>
                  {cart.length ? <div>Total sum: {totalSum}$</div> : null}
                  <div>
                    {cart.length ? (
                      <StyledButton onClick={onReserve}>Reserve</StyledButton>
                    ) : (
                      <StyledButton
                        onClick={() => {
                          setOpenCart(false);
                          navigate("/catalog");
                        }}
                      >
                        Select product
                      </StyledButton>
                    )}
                  </div>
                </div>
              </FooterContainer>
            </СartContainer>
          </Fade>
        )}
      </Popper>
      <ReservationProduct openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Basket;
