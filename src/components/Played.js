import React from 'react';
import { useContext } from 'react';
import { ContextGlobal } from '../globals/GlobalContext';
import { VideoGameCardPlayed } from './VideoGameCardPlayed';

export const Played = () => {
  const {played} = useContext(ContextGlobal);

  return (
    <div className='backlog-container'>
      {played.length > 0 &&(
          <ul className='games-container'>
            {played.map((game) => (
              <li key={game.id}>
                <VideoGameCardPlayed game={game} />
              </li>
            ))}

          </ul>
        )}
    </div>
  )
}
