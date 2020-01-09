import classnames from "classnames";
import React, { PureComponent } from "react";
import { IconPropsType } from "./PropsType";
import loadSprite from "./loadSprite";
import { Omit } from "../_util/types";
export type SvgProps = Omit<React.HTMLProps<SVGSVGElement>, "size" | "type">;
export interface IconProps extends IconPropsType, SvgProps {
  /** 尺寸 */
  size?: "xxs" | "xs" | "sm" | "md" | "lg";
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export default class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    size: "md"
  };
  componentDidMount() {
    loadSprite();
  }
  render() {
    const { type, className, size, ...restProps } = this.props;
    const cls = classnames(
      className,
      "bant-icon",
      `bant-icon-${type}`,
      `bant-icon-${size}`
    );
    return (
      <svg className={cls} style={{ color: restProps.color }}>
        <use xlinkHref={`#${type}`} />
      </svg>
    );
  }
}
