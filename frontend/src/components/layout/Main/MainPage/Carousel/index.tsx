import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { INewDevices, ITheBestDevices } from "types/Device";
import { useNavigate } from "react-router-dom";
import { Images } from "assets/styles/globals";
import { StyledCarousel } from "./style";

interface CarouselLayoutProps {
  children: React.ReactNode;
  devices: ITheBestDevices[] | INewDevices[];
}

const CarouselLayout: React.FC<CarouselLayoutProps> = ({
  devices,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <StyledCarousel>
      <h2>{children}</h2>
      <Carousel
        showStatus={false}
        showThumbs={false}
        interval={3000}
        autoPlay
        infiniteLoop
      >
        {devices.map((d: ITheBestDevices) => (
          <div
            key={d.id}
            onClick={() => navigate(`/device/${d.device_id}`)}
            style={{ cursor: "pointer" }}
          >
            <Images src={d.image} hht="480px" wth="inherit" />
            <h3>{d.name}</h3>
          </div>
        ))}
      </Carousel>
    </StyledCarousel>
  );
};

export default CarouselLayout;
