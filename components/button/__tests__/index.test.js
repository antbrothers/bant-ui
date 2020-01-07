import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "../index";
// import { LoadingIcon } from "../../icon";

describe("<Button/>", () => {
  it("should render a <Button/> components", () => {
    const wrapper = render(
      <div>
        <Button>你好</Button>
        <Button type="primary">你好</Button>
        <Button type="info">你好</Button>
        <Button type="warning">你好</Button>
        <Button type="error">你好</Button>
        <Button type="success">你好</Button>
        <Button disabled>你好</Button>
        <Button loading>加载中..</Button>
        <Button block>100%</Button>
        <Button circle>圆形</Button>
        <Button type="primary" size="large">
          大
        </Button>

        <Button type="info">中</Button>

        <Button type="warning" size="small">
          小
        </Button>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it("should find cuke-button classnames", () => {
  //   const wrapper = render(
  //     <div>
  //       <Button>你好</Button>
  //       <Button type="primary">你好</Button>
  //       <Button type="info">你好</Button>
  //       <Button type="warning">你好</Button>
  //       <Button type="error">你好</Button>
  //       <Button type="success">你好</Button>
  //       <Button disabled>你好</Button>
  //       <Button loading>加载中..</Button>
  //       <Button block>100%</Button>
  //       <Button circle>100%</Button>
  //     </div>
  //   );
  //   assert(wrapper.find(".bant-button").length >= 1);
  //   assert(wrapper.find(".bant-button-primary").length === 1);
  //   assert(wrapper.find(".bant-button-info").length === 1);
  //   assert(wrapper.find(".bant-button-warning").length === 1);
  //   assert(wrapper.find(".bant-button-error").length === 1);
  //   assert(wrapper.find(".bant-button-success").length === 1);
  //   assert(wrapper.find(".bant-button-disabled").length === 1);
  //   assert(wrapper.find(".bant-button-loading").length === 1);
  //   assert(wrapper.find(".bant-button-block").length === 1);
  //   assert(wrapper.find(".bant-button-circle").length === 1);
  // });

  // it("should can trigger click event", () => {
  //   const onClick = jest.fn();
  //   const wrapper = shallow(<Button onClick={onClick}>黄瓜ui</Button>);
  //   wrapper.find("button").simulate("click");
  //   expect(onClick).toHaveBeenCalled();
  // });
  // it("should can not trigger click event", () => {
  //   const onClick = jest.fn();
  //   const wrapper = shallow(
  //     <Button onClick={onClick} disabled>
  //       黄瓜ui
  //     </Button>
  //   );
  //   wrapper.find("button").simulate("click");
  //   expect(onClick).not.toHaveBeenCalled();
  // });
  // it("should can not render loading icon when mode is circle", () => {
  //   const wrapper = shallow(
  //     <Button loading circle>
  //       黄瓜ui
  //     </Button>
  //   );
  //   // assert(wrapper.find(LoadingIcon).length === 0);
  //   assert(wrapper.find(".cuke-loading").length === 0);
  // });

  // it("should render link", () => {
  //   const wrapper = shallow(<Button href="/test">黄瓜ui</Button>);
  //   assert(wrapper.find(".bant-button-link").length >= 1);
  // });

  // it("should can not click link when disabled", () => {
  //   const onClick = jest.fn();
  //   const wrapper = shallow(
  //     <Button href="/test" onClick={onClick} disabled>
  //       黄瓜ui
  //     </Button>
  //   );
  //   wrapper.find("a").simulate("click");
  //   expect(onClick).not.toHaveBeenCalled();
  // });
});
