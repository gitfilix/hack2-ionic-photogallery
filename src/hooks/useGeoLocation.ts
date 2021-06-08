import { useState, useEffect } from "react";
import { Capacitor } from '@capacitor/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { get } from "https";

const PHOTO_STORAGE = "photos";

export interface UserPosition {
  filepath: string;
  webviewPath?: string;
}

export function useGeoLocation() {
  // useState 
  const [position, setPosition] = useState<any>();

  useEffect(() => {
    const position = getCurrentPosition()
    setPosition(position)
  }, []);

  const getCurrentPosition = async () => {
    const position = await Geolocation.getCurrentPosition();
    console.log('Current position:', position);
    return position
  };

  return {
    position
  };
}





