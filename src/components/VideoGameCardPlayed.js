import React, {useContext} from 'react'
import { ContextGlobal } from '../globals/GlobalContext'
import ClearIcon from '@mui/icons-material/Clear';

export const VideoGameCardPlayed = ({game}) => {
  const{ removeGameFromPlayed } = useContext(ContextGlobal);
  
  return (
    <div className = "game-wrapper">
      <div className= "game-image-container">
        <img className='game-image' src={game.background_image} alt="Game background"></img>
      </div>
      <div className = 'game-data'>
        <span className='game-title'>{game.name}</span>
        <span className='game-date'>{game.released}</span>
      </div>
      <button className='game-add-button' onClick={() => removeGameFromPlayed(game)}>
        <ClearIcon/>
      </button>
    </div>
  )
}
