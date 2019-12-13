import React from 'react';
import './style.scss'
interface IProps {
  /**
   * Text for the tab
   */
  text: string;
  desc: Date;
}
class  Tabs extends React.Component <IProps, any> {
  public componentDidMount() {    
  }    
  public render() {
    return (
      <div className="special-box-con">
        <div className="nav-list">
          <a href="javascript: void(0)" className="nav-scroll" data-socrll-id="page-a">a</a>
          <a href="javascript: void(0)" className="nav-scroll" data-socrll-id="page-b">b</a>
          <a href="javascript: void(0)" className="nav-scroll" data-socrll-id="page-c">c</a>
          <a href="javascript: void(0)" className="nav-scroll" data-socrll-id="page-d">d</a>
        </div>
        <div className="container">
          <div id="page-a">
            a
         </div>
          <div id="page-b">
            b
          </div>
          <div id="page-c">
            c
          </div>
          <div id="page-d">
            d
          </div>
        </div>
      </div>
    )
  }
};
export default Tabs;