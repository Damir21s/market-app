import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "hooks/redux";
import { getDevices } from "store/products/product.actions";
import { useDebounce } from "hooks/debounce";
import { SearchContainer, SearchIconWrapper, StyledInputBase } from "./style";

interface SearchProps {
  typeId: string;
}

const Search: React.FC<SearchProps> = ({ typeId }) => {
  const dispatch = useAppDispatch();

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
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
      />
    </SearchContainer>
  );
};

export default Search;
