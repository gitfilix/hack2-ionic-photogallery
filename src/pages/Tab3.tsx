import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import { getDeviceInfos } from '../components/getDeviceInfos'
import { DisplayDeviceInfo } from '../components/DisplayDeviceInfo'
// import { Device } from '@capacitor/device'
import { language } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  // const { showBatteryInfo, showLanguageCode } = getDeviceInfos()
  /*
  const showLanguageCode = async () => {
    let showLangValue = ''
    let languageCode = await Device.getLanguageCode()
    console.log('tab3 showLanguageCode', languageCode)
    showLangValue = languageCode.value
    console.log('tab3 showLangValue', showLangValue)
    return showLangValue
  }
*/
  // console.log('tab3', showBatteryInfo)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Device Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow> Info: </IonRow>
          <IonRow>
            <DisplayDeviceInfo />
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          {/* <IonFabButton onClick={() => showLanguageCode()}>show me</IonFabButton> */}
        </IonFab>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Device info</IonTitle>
          </IonToolbar>
        </IonHeader>


      </IonContent>
    </IonPage>
  );
};

export default Tab3