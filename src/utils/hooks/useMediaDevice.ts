"use client";

import { useEffect, useRef, useState } from "react";

const constraints = {
  video: true,
  audio: true,
};
export const useMediaDevice = () => {
  const [microphones, setMicrophones] = useState<MediaDeviceInfo[]>([]);
  const [webcams, setWebcams] = useState<MediaDeviceInfo[]>([]);
  const [outputDevices, setOutputDevices] = useState<MediaDeviceInfo[]>([]);

  const videoWrapperRef = useRef(null);

  const getConnectedDevices = async () => {
    const devices = await navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        setMicrophones(devices.filter((device) => device.kind === "audioinput"));
        setWebcams(devices.filter((device) => device.kind === "videoinput"));
        setOutputDevices(devices.filter((device) => device.kind === "audiooutput"));
      })
      .catch((err) => console.log(err));
    return devices;
  };

  async function playVideoFromCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoWrapperRef) {
        videoWrapperRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error opening video camera.", error);
    }
  }

  const changeCamera = async (cameraId: string) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: cameraId,
        },
      });
      console.log("stream", stream);
      if (videoWrapperRef) {
        videoWrapperRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error opening video camera.", error);
    }
  };
  const changeAudio = async (audioId: string) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          deviceId: audioId,
        },
      });
      console.log("stream", stream);
      if (videoWrapperRef) {
        videoWrapperRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error opening video camera.", error);
    }
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(() => {
        getConnectedDevices();
        playVideoFromCamera();
      })
      .catch((error) => {
        console.error("Error accessing media devices.", error);
      });
  }, [videoWrapperRef]);
  console.log("videoWrapperRef", videoWrapperRef);
  return {
    microphones,
    webcams,
    outputDevices,
    videoWrapperRef,
    changeCamera,
    changeAudio,
  };
};
