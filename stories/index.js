/*
 * @Author: linjianxi
 * @Date: 2019-07-29 03:00:10
 * @LastEditTime : 2019-12-27 18:01:58
 * @Description: file content
 */
import React from "react";
import { storiesOf } from "@storybook/react";
import "./styles/index.less";


storiesOf("综述", module)
  .add("介绍", () => (
    <article style={{ padding: 20 }} className="index-page">
      <h2>名字由来</h2>
      <p>
        bant-ui , 探索，学习，创造，不断折腾
      </p>
    </article>
  ))

