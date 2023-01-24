import React, {useContext} from 'react'
import { ContextGlobal } from '../globals/GlobalContext'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const VideoGameCard = ({game}) => {
  const{ addGameToBacklog, backlog, played } = useContext(ContextGlobal);
  
  const gameAddedBacklog = backlog.find(games => games.id === game.id); 
  const disableAddBacklog = gameAddedBacklog ? true : false;

  const gameAddedPlayed = played.find(games => games.id === game.id); 
  const disableAddPlayed = gameAddedPlayed ? true : false;

  return (
    <div className = "game-wrapper">

      <div className= "game-image-container">
        <img className='game-image' src={game.background_image} alt="Game background"></img>
      </div>
      <div className = 'game-data'>
        <span className='game-title'>{game.name}</span>
        <span className='game-date'>{game.released}</span>
      </div>
      <button className='game-add-button' disabled={disableAddBacklog || disableAddPlayed} onClick={() => addGameToBacklog(game)}>
        <ArrowForwardIcon/>
      </button>
    </div>
  )
}
