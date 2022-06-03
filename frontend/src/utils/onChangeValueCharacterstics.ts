import { ICharacterstics } from "types/Device";

export const onChangeValueCharacterstics = (
  characteristics?: ICharacterstics
) => {
  let keys;
  let values;
  if (characteristics) {
    let entaries = Object.entries(characteristics)
      .slice(1)
      .filter((arr) => arr[1] !== null);
    values = entaries.map((arr) => arr[1]);
    keys = entaries.map(
      (arr) =>
        arr[0].charAt(0).toUpperCase() + arr[0].slice(1).replace("_", " ")
    );
  }
  return { keys, values };
};
