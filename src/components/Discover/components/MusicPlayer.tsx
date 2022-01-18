import React, { FC, useState, useRef, useEffect } from "react";

import Icon from "../../Icon";

import Image from "../../../assets/Images/pic2.jpeg";
import "./MusicPlayer.scss";

const MusicPlayer: FC<MusicPlayerProps> = ({ data }: MusicPlayerProps) => {
  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const numberOfSongs = data.length;
  const audioElement = useRef(null);
  const audioDiv = (
    <audio ref={audioElement} src={data[songIndex].songSrc}></audio>
  );
  const handlePrev = () => {
    if (songIndex === 0) {
      setSongIndex(numberOfSongs - 1);
    } else setSongIndex(songIndex - 1);
  };
  const handleNext = () => {
    if (songIndex < numberOfSongs - 1) {
      setSongIndex(songIndex + 1);
    } else setSongIndex(0);
  };
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });
  const className = "musicplayer";
  return (
    <div className={className}>
      <div className={`${className}_container`}>
        <div className={`${className}_icon`} onClick={handlePrev}>
          <Icon name="prev" />
        </div>
        <img src={data[songIndex].artSrc} className={`${className}_img`} />
        <div className={`${className}_icon`} onClick={handleNext}>
          <Icon name="next" />
        </div>
      </div>
      <div
        className={`${className}_icon`}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <Icon name={isPlaying ? "pause" : "play"} />
      </div>
      <div>
        <div className={`${className}_artist`}>{data[songIndex].artist}</div>
        <div className={`${className}_song`}>{data[songIndex].songName}</div>
      </div>
      {audioDiv}
    </div>
  );
};

export default MusicPlayer;

interface MusicPlayerProps {
  data: AudioProps[];
}

interface AudioProps {
  artist: string;
  songName: string;
  songSrc: any;
  artSrc: any;
}
