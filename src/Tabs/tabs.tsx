import React from 'react';
interface IProps {
  /**
   * Text for the tab
   */
  text: string;
  desc: Date;
}
export const Tabs = (props: IProps) => {
  return (
<a>{props.text} {props.desc}</a>
  )
}; 