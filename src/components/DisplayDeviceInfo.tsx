import React, { useState } from 'react';
import { Capacitor } from '@capacitor/core'
import { Device } from '@capacitor/device'
import { IonButton, IonItem, IonLoading, IonToast, IonCard, IonLabel } from '@ionic/react';

export const DisplayDeviceInfo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [batteryInfo, setBatteryInfo] = useState({})

  const getBatteryInfo = async () => {
    setIsLoading(true)
    try {
      const batteryInfo = await Device.getBatteryInfo()
      setIsLoading(false)
      setBatteryInfo(batteryInfo)
    } catch (e) {
      setIsLoading(false)
      console.error(e)
    }

    console.log('batteryInfo', batteryInfo)
  }

  return (
    <>
      <div className='batteryInfo'>
        <IonLoading isOpen={!isLoading} message={'loading... '} />
        <div>Battery: batteryInfo </div>
      </div>
    </>
  )
}

export default DisplayDeviceInfo;