import Search from "components/forms/Search";
import Catalog from "components/layout/Main/ProductsPage/Catalog";
import Devices from "components/layout/Main/ProductsPage/DevicesList";
import { useAppDispatch } from "hooks/redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDevices } from "store/products/product.actions";
import { ProductContainer, SearchContainer, SearchWrapper } from "./style";

const CatalogPage = () => {
  const { typeId = "" } = useParams();

  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);

  const limit = 5;

  useEffect(() => {
    dispatch(getDevices({ value: "", page, limit, type: typeId }));
  }, [typeId, page]);

  return (
    <ProductContainer>
      <Catalog setPage={setPage} />
      <SearchContainer>
        <SearchWrapper>
          <Search typeId={typeId} />
        </SearchWrapper>
        <Devices setPage={setPage} page={page} limit={limit} />
      </SearchContainer>
    </ProductContainer>
  );
};

export default CatalogPage;
