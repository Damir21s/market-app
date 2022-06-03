import Preloader from "components/layout/Preloader";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import { getNewDevice, getTheBestDevice } from "store/products/product.actions";
import CarouselLayout from "..";
import { CarouselsContainer } from "./style";

const CarouselsSection = () => {
  const dispatch = useAppDispatch();

  const newD = useAppSelector((state) => state.newDeviceReducer);

  const bestD = useAppSelector((state) => state.theBestDeviceReducer);

  useEffect(() => {
    dispatch(getTheBestDevice());
    dispatch(getNewDevice());
  }, []);

  return (
    <CarouselsContainer>
      <Preloader isLoading={newD.isLoading} error={newD.error}>
        {newD.newDevice ? (
          <CarouselLayout devices={newD.newDevice}>New</CarouselLayout>
        ) : null}
      </Preloader>
      <Preloader isLoading={bestD.isLoading} error={bestD.error}>
        {bestD.bestDevice ? (
          <CarouselLayout devices={bestD.bestDevice}>The best</CarouselLayout>
        ) : null}
      </Preloader>
    </CarouselsContainer>
  );
};

export default CarouselsSection;
