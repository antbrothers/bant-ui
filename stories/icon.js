/*
 * @Author: linjianxi
 * @Date: 2020-01-09 09:20:27
 * @LastEditTime : 2020-01-09 15:04:14
 * @Description: file content
 */
import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Icon from '../components/icon/index'
import "../components/icon/styles.less"
import "./styles/icon.less"
storiesOf('普通', module).add(
    'Icon 图标',
    () => (
        <div>
            <h4>基本用法</h4>
            <div className="icon-example-main">
                <div className="icon-example">
                    <Icon type="loading" size="sm"></Icon>
                    <div className="icon-text">loading</div>
                </div>
                <div className="icon-example">
                    <Icon type="check" color="D9AF5C" size="sm"></Icon>
                    <div className="icon-text">check</div>
                </div>
                <div className="icon-example">
                    <Icon type="check-circle-o" size="sm"></Icon>
                    <div className="icon-text">check-circle-o</div>
                </div>
                <div className="icon-example">
                    <Icon type="check-circle" color="green" size="sm"></Icon>
                    <div className="icon-text">check-circle</div>
                </div>
                <div className="icon-example">
                    <Icon type="cross" size="sm"></Icon>
                    <div className="icon-text">cross</div>
                </div>
                <div className="icon-example">
                    <Icon type="cross-circle" size="sm"></Icon>
                    <div className="icon-text">cross-circle</div>
                </div>
                <div className="icon-example">
                    <Icon type="cross-circle-o" color="red" size="sm"></Icon>
                    <div className="icon-text">cross-circle-o</div>
                </div>
                <div className="icon-example">
                    <Icon type="up" size="sm"></Icon>
                    <div className="icon-text">up</div>
                </div>
                <div className="icon-example">
                    <Icon type="down" size="sm"></Icon>
                    <div className="icon-text">down</div>
                </div>
                <div className="icon-example">
                    <Icon type="left" size="sm"></Icon>
                    <div className="icon-text">left</div>
                </div>
                <div className="icon-example">
                    <Icon type="right" size="sm"></Icon>
                    <div className="icon-text">right</div>
                </div>
                <div className="icon-example">
                    <Icon type="ellipsis" size="sm"></Icon>
                    <div className="icon-text">ellipsis</div>
                </div>
            </div>
            <h4>大小</h4>
            <div className="icon-example-main">
            <div className="icon-example">
                    <Icon type="loading" size="xs"></Icon>      
                    <div className="icon-text">xs</div>           
                </div>
                <div className="icon-example">
                    <Icon type="loading" size="xxs"></Icon>       
                    <div className="icon-text">xxs</div>          
                </div>
                <div className="icon-example">
                    <Icon type="loading" size="sm"></Icon>     
                    <div className="icon-text">sm</div>            
                </div>
                <div className="icon-example">
                    <Icon type="loading" size="md"></Icon>     
                    <div className="icon-text">md</div>            
                </div>
               
                <div className="icon-example">
                    <Icon type="loading" size="lg"></Icon>   
                    <div className="icon-text">lg</div>              
                </div>
            </div>
        </div>


    )
);