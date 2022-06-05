import Preloader from "components/layout/Preloader";
import { useAppSelector } from "hooks/redux";
import { FormattedMessage } from "react-intl";
import Paginate from "../Pagination";
import ProductCard from "./ProductCard";
import { NotFoundAlert, ProductCardsContainer } from "./style";

interface DevicesProps {
  setPage: (value: number) => void;
  limit: number;
  page: number;
}

const Devices: React.FC<DevicesProps> = ({ setPage, page, limit }) => {
  const { data, isLoading, error } = useAppSelector(
    (state) => state.deviceReducer
  );

  return (
    <Preloader isLoading={isLoading} error={error}>
      {data.device?.length ? (
        <ProductCardsContainer>
          {data.device.map((device, i) => (
            <div key={i}>
              <ProductCard
                id={device.id}
                img={device.img}
                name={device.name}
                price={device.price}
              />
            </div>
          ))}
          <Paginate
            totalItems={data.totalItems}
            limit={limit}
            setPage={setPage}
            page={page}
          />
        </ProductCardsContainer>
      ) : (
        <NotFoundAlert>
          <FormattedMessage id="not_found" />
        </NotFoundAlert>
      )}
    </Preloader>
  );
};

export default Devices;
