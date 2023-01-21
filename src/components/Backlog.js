import React from 'react';
import { VideoGameCardBacklog } from './VideoGameCardBacklog';
import { useContext } from 'react';
import { ContextGlobal } from '../globals/GlobalContext';

export const Backlog = () => {
  const {backlog} = useContext(ContextGlobal);

  return (
    <div className='backlog-container'>
      {backlog.length > 0 &&(
          <ul className='games-container'>
            {backlog.map((game) => (
              <li key={game.id}>
                <VideoGameCardBacklog game={game} />
              </li>
            ))}

          </ul>
        )}
    </div>
  )
}
