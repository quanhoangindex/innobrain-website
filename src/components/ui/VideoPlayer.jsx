import "./VideoPlayer.css";
import { Play } from "lucide-react";

function VideoPlayer() {
  return (
    <div className="videop-outside">
      <div className="videop-inside">
        <button className="videop-buton">
          <Play className="video-play" />
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
