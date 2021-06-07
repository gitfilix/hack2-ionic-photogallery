import { useState, useEffect } from "react";
import { isPlatform } from "@ionic/react";

import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";

import { Filesystem, Directory } from "@capacitor/filesystem";
import { Storage } from "@capacitor/storage";
import { Capacitor } from "@capacitor/core";

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}


export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  // take a picture
  const takePhoto = async () => {
    const fileName = new Date().getTime() + ".jpeg";
    const cameraPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 90,
    })
    
    const newPhotos = [
        {
          filepath: fileName,
          webviewPath: cameraPhoto.webPath,
        },
        ...photos,
      ];
    setPhotos(newPhotos);
  }

  return {
    photos,
    takePhoto,
  }
}