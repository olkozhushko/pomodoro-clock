import auFile from "../assets/audio/beep.wav";

export default function playBeep() {
   const audio = new Audio(auFile);

   return audio.play();
}