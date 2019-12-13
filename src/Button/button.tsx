import React from 'react';
import './style.scss'
interface IProps {
  /**
   * Text for the button
   */
  text: string;
}

export const Button = (props: IProps) => {
  return (
    <div className='f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple'>
      {props.text}
    </div>
  )
}; 