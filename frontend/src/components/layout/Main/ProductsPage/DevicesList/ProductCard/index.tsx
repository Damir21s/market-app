import { Images } from "assets/styles/globals";
import Button from "components/layout/Main/Button";
import { useNavigate } from "react-router-dom";
import { StyledCard } from "./style";

interface ProductCardProps {
  id: number;
  img: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, name, price, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <StyledCard onClick={() => navigate(`/device/${id}`)}>
        <Images hht="10rem" wth="8rem" src={img} />
        <div>
          <div>
            <h3>{name}</h3>
            <div>{price}$</div>
          </div>
          <Button id={id} name={name} img={img} price={price} />
        </div>
      </StyledCard>
    </>
  );
};

export default ProductCard;
