/*
 * @Author: linjianxi
 * @Date: 2020-01-09 16:16:34
 * @LastEditTime : 2020-01-09 16:38:53
 * @Description: file content
 */
import React from 'react'
import { render, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Icon from '../index'

describe("<Icon/>", () => {
    it("should render a <Icon/> components", () => {
        const wrapper = render(
            <div>
                <Icon type="loading" size="sm"></Icon>
                <Icon type="check" color="D9AF5C" size="sm"></Icon>
                <Icon type="check-circle-o" size="sm"></Icon>
                <Icon type="check-circle" color="green" size="sm"></Icon>
                <Icon type="cross" size="sm"></Icon>
                <Icon type="cross-circle" size="sm"></Icon>
                <Icon type="cross-circle-o" color="red" size="sm"></Icon>
                <Icon type="up" size="sm"></Icon>
                <Icon type="down" size="sm"></Icon>
                <Icon type="left" size="sm"></Icon>
                <Icon type="right" size="sm"></Icon>
                <Icon type="ellipsis" size="sm"></Icon>
                <Icon type="loading" size="xs"></Icon>      
                <Icon type="loading" size="xxs"></Icon>     
                <Icon type="loading" size="sm"></Icon>       
                <Icon type="loading" size="md"></Icon>     
                <Icon type="loading" size="lg"></Icon>   

            </div>
        )
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})