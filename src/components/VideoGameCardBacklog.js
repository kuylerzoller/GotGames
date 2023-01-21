import React, {useContext} from 'react';
import { ContextGlobal } from '../globals/GlobalContext';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';

export const VideoGameCardBacklog = ({game}) => {
  const{ removeGameFromBacklog, addGameToPlayed } = useContext(ContextGlobal);
  
  return (
    <div className = "game-wrapper">
      <div className= "game-image-container">
        <img className='game-image' src={game.background_image} alt="Game background"></img>
      </div>
      <div className = 'game-data'>
        <span className='game-title'>{game.name}</span>
        <span className='game-date'>{game.released}</span>
      </div>
      <button className='game-add-button' onClick = {() => addGameToPlayed(game)}>
        <DoneIcon/>
      </button>
      <button className='game-add-button' onClick={() => removeGameFromBacklog(game)}>
        <ClearIcon/>
      </button>
    </div>
  )
}
