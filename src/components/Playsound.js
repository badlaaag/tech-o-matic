import React, { useState, useEffect } from 'react';
import Sound from 'react-sound';
import BiliNaKayo from '../components/bilinakayo.mp3';

const PlaySound = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(true); // Start playing when component is rendered
  }, []);

  return (
    <div>
      <Sound
        url={BiliNaKayo}
        playStatus={
          isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
        }
        playFromPosition={300}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
    </div>
  );
};

export default PlaySound;
