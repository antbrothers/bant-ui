/*
 * @Author: linjianxi
 * @Date: 2020-01-09 16:16:34
 * @LastEditTime : 2020-01-09 16:38:53
 * @Description: file content
 */
import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Icon from "../index";

describe("<Icon/>", () => {
  it("should render a <Icon/> components", () => {
    const wrapper = render(
      <div>
        <Icon type="loading" size="sm" />
        <Icon type="check" color="D9AF5C" size="sm" />
        <Icon type="check-circle-o" size="sm" />
        <Icon type="check-circle" color="green" size="sm" />
        <Icon type="cross" size="sm" />
        <Icon type="cross-circle" size="sm" />
        <Icon type="cross-circle-o" color="red" size="sm" />
        <Icon type="up" size="sm" />
        <Icon type="down" size="sm" />
        <Icon type="left" size="sm" />
        <Icon type="right" size="sm" />
        <Icon type="ellipsis" size="sm" />
        <Icon type="loading" size="xs" />
        <Icon type="loading" size="xxs" />
        <Icon type="loading" size="sm" />
        <Icon type="loading" size="md" />
        <Icon type="loading" size="lg" />
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
