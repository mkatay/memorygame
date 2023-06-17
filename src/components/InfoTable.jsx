import React from 'react'

export const InfoTable = ({score,remaining}) => {
  return (
    <div>
      <p >Tries: <b>{score}</b></p>
      <p>Remaining pairs: <b>{remaining}</b></p>
      {remaining==0 && <p>Great Job! 👍</p>}
    </div>
  )
}


