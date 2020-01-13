import React, { PureComponent } from 'react'
import cls from 'classnames'
import { ITabProps } from './PropsType'
interface IProps extends ITabProps {
    prefixCls?: string;
    className?: string;
}
export default class Tab extends PureComponent<IProps, any> {
    static defaultProps = {
        prefixCls: "bant-tab",        
    }
    render() {
        const { prefixCls, className, children} =  this.props
        const baseProps = {
            className: cls(prefixCls, className, {
            })
        }
        const content = (
            <>
                <span>{children}</span>
            </>
        )
        return (
            <div>
                {content}
            </div>
        )
        
    }
}