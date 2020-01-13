/*
 * @Author: linjianxi
 * @Date: 2020-01-09 09:20:27
 * @LastEditTime : 2020-01-13 18:03:30
 * @Description: file content
 */
import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tab from '../components/tab/index'
import "../components/tab"
storiesOf('普通', module).add(
    'tab 组件',
    () => (
        <div>
            <h4>基本用法</h4>
            <div className="Icon-example-main">
                <Tab>tab</Tab>
            </div>

        </div>


    )
);