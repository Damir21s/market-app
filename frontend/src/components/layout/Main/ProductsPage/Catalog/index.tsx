import SmartphonesIcon from "@mui/icons-material/Smartphone";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import TabletIcon from "@mui/icons-material/Tablet";
import { Link } from "assets/styles/globals";
import { CatalogContainer, StyledIcon } from "./style";
import { FormattedMessage } from "react-intl";

interface ICatalog {
  setPage: (page: number) => void;
}

const categories = [
  { id: 1, name: <FormattedMessage id="smartphones" />, icon: SmartphonesIcon },
  { id: 2, name: <FormattedMessage id="headphones" />, icon: HeadphonesIcon },
  { id: 3, name: <FormattedMessage id="tablet" />, icon: TabletIcon },
];

const Catalog: React.FC<ICatalog> = ({ setPage }) => {
  return (
    <CatalogContainer>
      {categories.map((category) => (
        <div key={category.id}>
          <Link to={`/catalog/${category.id}`}>
            <div
              onClick={() => {
                setPage(1);
              }}
            >
              <StyledIcon>
                <category.icon />
              </StyledIcon>
              <div>{category.name}</div>
            </div>
          </Link>
        </div>
      ))}
    </CatalogContainer>
  );
};
export default Catalog;
