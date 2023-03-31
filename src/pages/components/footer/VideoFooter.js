import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className='VideoFooter'>
      <div className='videoFooter__text'>
          <h3>@Giselly_So</h3>
          <p>Descrição do Video</p>
          <div className='videoFooter__music'>
            <MusicNoteIcon className="videoFooter__icon"/>
            <div className="videoFooterMusic__text">
              <p>Título da música</p>
            </div>
          </div>
      </div>
      <img
        className='videoFooter__record'
        alt="Imagem de um vinil girando"
        src={require("../../../assets/vinil.png")}
      />

    </div>
  )
}

export default VideoFooter