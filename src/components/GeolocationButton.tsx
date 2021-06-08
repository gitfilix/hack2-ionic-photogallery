import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { IonButton, IonLoading, IonToast } from '@ionic/react';
import React, { useState } from 'react';

interface LocationError {
    showError: boolean;
    message?: string;
}

const GeolocationButton: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<LocationError>({ showError: false });
    const [position, setPosition] = useState<Geoposition>();

    const getLocation = async () => {
      setLoading(true);

      try {
          const position = await Geolocation.getCurrentPosition();
          setPosition(position);
          setLoading(false);
          setError({ showError: false });
      } catch (e) {
          setError({ showError: true, message: e.message });
          setLoading(false);
      }
    }

    const drawMap = (latitude: number, longitude: number) => {
      const src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyCAI-kfzVhSmr1aUJ4N-gLyjozI6OR8uZA&center=${latitude},${longitude}&zoom=18&maptype=satellite`
      return (
        <iframe
          width="400"
          height="250"
          src={src}>
        </iframe>      
      )
    }

    return (
      <>
          <IonLoading
              isOpen={loading}
              onDidDismiss={() => setLoading(false)}
              message={'Getting Location...'}
          />
          <IonToast
              isOpen={error.showError}
              onDidDismiss={() => setError({ message: "", showError: false })}
              message={error.message}
              duration={3000}
          />
          <IonButton color="primary" onClick={getLocation}>{position ? `Position: ${position.coords.latitude} | ${position.coords.longitude}` : "Get Location"}</IonButton>
          {position && drawMap(position.coords.latitude, position.coords.longitude)}
      </>
    );
};

export default GeolocationButton;