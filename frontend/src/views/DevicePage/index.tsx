import { LanguageContext } from "App";
import { Images } from "assets/styles/globals";
import Button from "components/layout/Main/Button";
import Preloader from "components/layout/Preloader";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneDevice } from "store/products/product.actions";
import { onChangeLanguage } from "utils/onChangeLanguage";
import {
  CharactericticsContainer,
  ProductContainer,
  ProductWrapper,
  StyledButtonContainer,
  StyledDescription,
} from "./style";

const DevicePage = () => {
  let { id = "" } = useParams();

  const dispatch = useAppDispatch();

  const { currentLanguage } = useContext(LanguageContext);

  const { oneDevice, isLoading, error } = useAppSelector(
    (state) => state.deviceReducer
  );

  const {
    selectLangKeysCharacter,
    selectLangValuesCharacter,
    selectLangDescriprion,
  } = onChangeLanguage(
    currentLanguage,
    oneDevice?.characteristics,
    oneDevice?.description
  );

  useEffect(() => {
    dispatch(getOneDevice(id));
  }, [id]);

  return (
    <Preloader isLoading={isLoading} error={error}>
      <ProductContainer>
        {oneDevice && (
          <ProductWrapper>
            <h1>{oneDevice.name}</h1>
            <CharactericticsContainer>
              <div>
                <Images wth="20rem" hht="25rem" src={oneDevice.img} />
              </div>
              <div>
                <ul>
                  {selectLangKeysCharacter.map((key, i) => (
                    <li key={i}>{key}</li>
                  ))}
                </ul>
                <ul>
                  {selectLangValuesCharacter.map((value, i) => (
                    <li key={i}>{value}</li>
                  ))}
                </ul>
              </div>
            </CharactericticsContainer>
            <StyledButtonContainer>
              <div>
                <h2>{oneDevice.price}$</h2>
                <Button
                  id={oneDevice.id}
                  name={oneDevice.name}
                  img={oneDevice.img}
                  price={oneDevice.price}
                />
              </div>
            </StyledButtonContainer>
            <StyledDescription>{selectLangDescriprion}</StyledDescription>
          </ProductWrapper>
        )}
      </ProductContainer>
    </Preloader>
  );
};

export default DevicePage;
