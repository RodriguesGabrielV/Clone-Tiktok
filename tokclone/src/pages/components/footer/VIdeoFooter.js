import React from "react";
import "./VIdeoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@4strnt</h3>
        <p>Descrição do Video</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooterMusic__icon" />
          <div className="videoFooterMusic__text">
            <p>Titulo da música</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="IMagem De Um Vinil Girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  );
}

export default VideoFooter;
