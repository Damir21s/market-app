import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useAppDispatch } from "hooks/redux";
import { getDevices } from "store/products/product.actions";
import { useDebounce } from "hooks/debounce";
import { SearchContainer, SearchIconWrapper, StyledInputBase } from "./style";
import { LanguageContext } from "App";

interface SearchProps {
  typeId: string;
}

const Search: React.FC<SearchProps> = ({ typeId }) => {
  const dispatch = useAppDispatch();

  const { currentLanguage } = useContext(LanguageContext);

  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 500);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value !== "") {
      dispatch(getDevices({ value, page: 1, limit: 5, type: typeId }));
    }
  }, [debouncedValue]);

  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={currentLanguage === "en-US" ? "Search..." : "Поиск..."}
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
      />
    </SearchContainer>
  );
};

export default Search;
