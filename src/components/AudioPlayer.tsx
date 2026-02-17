"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

type AudioPlayerProps = {
  src?: string;
  title?: string;
};

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
    if (vol === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (time: number) => {
    if (!isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (!src) {
    return (
      <div className="glass rounded-panel p-8 text-center">
        <p className="text-white/60">Audio demo not available for this product</p>
      </div>
    );
  }

  return (
    <div className="glass rounded-panel p-6">
      <audio ref={audioRef} src={src} preload="metadata" />
      
      {title && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-white/90">{title}</h3>
        </div>
      )}

      <div className="space-y-4">
        {/* Play/Pause Button */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={togglePlay}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-arctic-cyan/30 bg-gradient-to-br from-arctic-cyan/20 to-arctic-cyan/5 shadow-glow transition hover:shadow-glow hover:border-arctic-cyan/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-arctic-cyan" />
            ) : (
              <Play className="h-5 w-5 text-arctic-cyan ml-0.5" />
            )}
          </motion.button>

          {/* Progress Bar */}
          <div className="flex-1">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleProgressChange}
              className="audio-progress-bar w-full"
              style={{
                background: `linear-gradient(to right, #6FE8FF ${(currentTime / duration) * 100}%, rgba(159, 242, 255, 0.1) ${(currentTime / duration) * 100}%)`
              }}
            />
            <div className="mt-1 flex justify-between text-xs text-white/50">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleMute}
            className="text-white/60 transition hover:text-arctic-cyan"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </motion.button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="audio-volume-bar w-24"
            style={{
              background: `linear-gradient(to right, #6FE8FF ${(isMuted ? 0 : volume) * 100}%, rgba(159, 242, 255, 0.1) ${(isMuted ? 0 : volume) * 100}%)`
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .audio-progress-bar,
        .audio-volume-bar {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }

        .audio-progress-bar::-webkit-slider-thumb,
        .audio-volume-bar::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #6FE8FF;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(111, 232, 255, 0.5);
        }

        .audio-progress-bar::-moz-range-thumb,
        .audio-volume-bar::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #6FE8FF;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(111, 232, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
