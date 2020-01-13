/*
 * @Author: linjianxi
 * @Date: 2020-01-13 18:04:08
 * @LastEditTime : 2020-01-13 18:06:18
 * @Description: file content
 */
import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Tab from "../index";
import { action } from "@storybook/addon-actions";

// import { LoadingIcon } from "../../icon";

describe("<Button/>", () => {
  it("should render a <Button/> components", () => {
    const wrapper = render(
      <div>
        <Tab>默认</Tab>        
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})