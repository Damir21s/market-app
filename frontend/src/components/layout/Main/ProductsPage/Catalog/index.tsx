import SmartphonesIcon from "@mui/icons-material/Smartphone";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import TabletIcon from "@mui/icons-material/Tablet";
import { Link } from "assets/styles/globals";
import { CatalogContainer, StyledIcon } from "./style";

interface ICatalog {
  setPage: (page: number) => void;
}

const categories = [
  { id: 1, name: "Smartphones", icon: SmartphonesIcon },
  { id: 2, name: "Headphones", icon: HeadphonesIcon },
  { id: 3, name: "Tablet", icon: TabletIcon },
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
