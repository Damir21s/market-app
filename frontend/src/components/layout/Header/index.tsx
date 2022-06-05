import Logo from "@mui/icons-material/TabletAndroid";
import { useState } from "react";
import { Link, StyledButton } from "assets/styles/globals";
import Login from "components/forms/Login";
import Register from "components/forms/Register";
import Basket from "../Cart";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { logout } from "store/users/user.slice";
import { clearCart } from "store/cart/cart.slice";
import {
  FlexContainer,
  HeaderContainer,
  HeaderWrapper,
  List,
  LogoContainer,
} from "./style";
import { NavLink } from "react-router-dom";
import SelectLanguage from "./SelectLanguage";
import { FormattedMessage } from "react-intl";

const pages = [
  { id: 1, name: [<FormattedMessage id="catalog" />, "catalog"] },
  { id: 2, name: [<FormattedMessage id="promotion" />, "promotion"] },
  { id: 3, name: [<FormattedMessage id="news" />, "news"] },
];

const Header = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.userReducer);

  const [openModalLogin, setOpenModalLogin] = useState(false);

  const [openModalRegister, setOpenModalRegister] = useState(false);

  const onLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    setOpenModalLogin(false);
    setOpenModalRegister(false);
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <FlexContainer>
          <div>
            <NavLink to="/">
              <LogoContainer>
                <Logo />
                <h3>Device.ru</h3>
              </LogoContainer>
            </NavLink>
            <List>
              {pages.map((page) => (
                <li key={page.id}>
                  <Link to={"/" + page.name[1]}>
                    <div>{page.name[0]}</div>
                  </Link>
                </li>
              ))}
            </List>
          </div>
          <div>
            <Basket />
            {user ? (
              <StyledButton bg="var(--transparent-default)" onClick={onLogout}>
                <FormattedMessage id="sign_out" />
              </StyledButton>
            ) : (
              <div>
                <StyledButton
                  bg="var(--transparent-default)"
                  onClick={() => setOpenModalRegister(true)}
                >
                  <FormattedMessage id="sign_up" />
                </StyledButton>
                <StyledButton
                  bg="var(--transparent-default)"
                  onClick={() => setOpenModalLogin(true)}
                >
                  <FormattedMessage id="sign_in" />
                </StyledButton>
              </div>
            )}
            <SelectLanguage />
          </div>
        </FlexContainer>
        <Login openModal={openModalLogin} setOpenModal={setOpenModalLogin} />
        <Register
          openModal={openModalRegister}
          setOpenModal={setOpenModalRegister}
        />
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
