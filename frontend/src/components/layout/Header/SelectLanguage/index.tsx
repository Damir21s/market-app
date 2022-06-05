import { LanguageContext } from "App";
import { LOCALES } from "i18n/locales";
import { useContext } from "react";
import { StyledSelect } from "./style";

const languages = [
  { id: 1, name: "Eng", code: LOCALES.ENGLISH },
  { id: 2, name: "Рус", code: LOCALES.RUSSIAN },
];

const SelectLanguage = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);

  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLanguage(e.currentTarget.value);
  };

  return (
    <>
      <StyledSelect
        onChange={(e) => {
          handleClick(e);
        }}
        value={currentLanguage}
      >
        {languages.map(({ id, name, code }) => (
          <option key={id} value={code}>
            {name}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};

export default SelectLanguage;
