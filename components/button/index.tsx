import React, { PureComponent } from "react";
import cls from "classnames";
import Icon from "../icon";
import { ButtonPropsType } from "./PropsType";
interface Props extends ButtonPropsType {
  prefixCls?: string;
  block?: boolean;
  hollow?: boolean;
  dashed?: boolean;
  circle?: boolean;
  plain?: boolean;
  htmlType?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export default class Button extends PureComponent<Props, any> {
  static defaultProps = {
    prefixCls: "bant-button",
    href: "",
    type: "default",
    size: "large",
    loading: false,
    disabled: false,
    hollow: false,
    dashed: false,
    circle: false,
    plain: false
  };

  render() {
    const {
      loading,
      children,
      disabled,
      prefixCls,
      type,
      block,
      className,
      onClick,
      hollow,
      size,
      href,
      dashed,
      circle,
      plain,
      ...attr
    } = this.props;

    const isDisabled = disabled || loading ? { disabled: true } : { onClick };
    const iconType: any = loading ? "loading" : undefined;

    const baseProps = {
      ...attr,
      ...isDisabled,
      className: cls(prefixCls, className, {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-size-${size}`]: size === "large",
        [`${prefixCls}-icon-${iconType}`]: !!iconType
      })
    };
    const content = (
      <>
        <span>{children}</span>
      </>
    );
    let iconEl;
    if (typeof iconType === "string") {
      iconEl = <Icon type={iconType} size="xxs" />;
    } else {
      iconEl = <></>;
    }
    if (href) {
      return (
        <a
          href={disabled ? "javascript:void(0);" : href}
          className={cls(`${prefixCls}-link`, className, {
            [`${prefixCls}-link-disabled`]: disabled
          })}
          {...attr}
        >
          {content}
        </a>
      );
    }
    return (
      <button {...baseProps}>
        {iconEl}
        {content}
      </button>
    );
  }
}
