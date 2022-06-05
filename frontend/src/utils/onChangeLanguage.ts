import { LOCALES } from "../i18n/locales";

export const onChangeLanguage = (
  currentLanguage: string,
  characteristics?: Array<Object>,
  description?: Array<string>
) => {
  let selectLangCharacter: any;
  let selectLangKeysCharacter: Array<string> = [];
  let selectLangValuesCharacter: Array<string> = [];
  let selectLangDescriprion: any;

  if (characteristics) {
    if (currentLanguage === LOCALES.ENGLISH) {
      selectLangCharacter = characteristics[0];
    } else {
      selectLangCharacter = characteristics[1];
    }
    const { arrKeys, arrValues } = onChangeArrayCharacter(selectLangCharacter);
    selectLangKeysCharacter = arrKeys;
    selectLangValuesCharacter = arrValues;
  }

  if (description) {
    if (currentLanguage === LOCALES.ENGLISH) {
      selectLangDescriprion = description[0];
    } else {
      selectLangDescriprion = description[1];
    }
  }

  return {
    selectLangKeysCharacter,
    selectLangValuesCharacter,
    selectLangDescriprion,
  };
};

const onChangeArrayCharacter = (selectLangCharacter: Array<string>) => {
  const arrKeys: Array<string> = [];
  const arrValues: Array<string> = [];

  for (let key in selectLangCharacter) {
    arrKeys.push(key);
    arrValues.push(selectLangCharacter[key]);
  }

  return { arrKeys, arrValues };
};

export const onChangeLanguageError = (
  error: string[] | string | null,
  currentLanguage: string
) => {
  let errorIntlRegister: string[] = [];
  let errorIntlLogin: string = "";
  if (error) {
    if (typeof error !== "string") {
      if (currentLanguage === LOCALES.ENGLISH) {
        error.forEach((er) => {
          errorIntlRegister.push(er.split("|")[1]);
        });
      } else {
        error.forEach((er) => {
          errorIntlRegister.push(er.split("|")[0]);
        });
      }
    } else {
      if (currentLanguage === LOCALES.ENGLISH) {
        errorIntlLogin = error.split("|")[1];
        debugger;
      } else {
        errorIntlLogin = error.split("|")[0];
      }
    }
  }

  return { errorIntlRegister, errorIntlLogin };
};
