import './ExploreContainer.css';
import { GeolocationPosition } from '@capacitor/geolocation';

interface ContainerProps {
  name: string;
  position: GeolocationPosition;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, position }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      {/* <div>{position.coords.latitude}</div> */}
    </div>
  );
};

export default ExploreContainer;
