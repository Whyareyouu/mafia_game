"use client";

import { useMediaDevice } from "@/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const PlayerSettings = () => {
  const { webcams, microphones, outputDevices, videoWrapperRef, changeCamera, changeAudio } = useMediaDevice();
  console.log("webcams", webcams[0]?.label);
  console.log("microphones", microphones);
  const onChangeCamera = (value: string) => {
    console.log(value);
    changeCamera(value);
  };
  const onChangeAudio = (value: string) => {
    console.log(value);
    changeAudio(value);
  };
  return (
    <div>
      <h2>123321</h2>
      <video ref={videoWrapperRef} className="w-[500px] h-[500px]" autoPlay />
      <Select onValueChange={onChangeCamera}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Источник видео" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {webcams.map((webcam) => (
              <SelectItem value={webcam?.deviceId}>{webcam?.label}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select onValueChange={onChangeAudio}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Микрофон" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {microphones.map((microphone) => (
              <SelectItem value={microphone?.deviceId}>{microphone?.label}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Выход звука" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {outputDevices.map((outputDevice) => (
              <SelectItem value={outputDevice?.deviceId}>{outputDevice?.label}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
