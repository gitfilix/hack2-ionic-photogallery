import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MapContainer from '../components/MapContainer';
// import { useGeoLocation } from '../hooks/useGeoLocation'
import GeolocationButton from "../components/GeolocationButton";
import './Tab1.css';


const Tab1: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Show my location!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Show my location!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <GeolocationButton />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
