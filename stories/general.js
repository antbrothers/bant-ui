import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/button/index';
import './styles/button.less';

import "../components/button/styles.less";

storiesOf('普通', module).add(
  'Button 按钮',
  () => (
    <div className="button-example">
      <h2>基本使用</h2>

      <Button onClick={action('clicked')}>默认</Button>

     <Button type="primary" onClick={action('clicked')}>
        主色调
      </Button>

       <Button type="info" onClick={action('clicked')}>
        信息
      </Button>

      <Button type="warning" onClick={action('clicked')}>
        警告
      </Button>

      <Button type="error" onClick={action('clicked')}>
        错误
      </Button>

      <Button type="success" onClick={action('clicked')}>
        成功
      </Button>

      <Button disabled onClick={action('clicked')}>
        禁用
      </Button>

      <Button icon="loading"  loading={true} onClick={action('clicked')}>
        加载中
      </Button>

      {/* <Button type="primary" block onClick={action('clicked')}>
        100%
      </Button>

      <h2>空心按钮</h2>
      <Button type="primary" hollow onClick={action('clicked')}>
        主色调
      </Button>

      <Button type="info" hollow onClick={action('clicked')}>
        信息
      </Button>

      <Button type="warning" hollow onClick={action('clicked')}>
        警告
      </Button>

      <Button type="error" hollow onClick={action('clicked')}>
        错误
      </Button>

      <Button type="success" hollow onClick={action('clicked')}>
        成功
      </Button>
      <Button type="error" hollow disabled onClick={action('clicked')}>
        禁用
      </Button>

      <Button type="info" hollow dashed onClick={action('clicked')}>
        虚线
      </Button>

      <Button type="error" hollow dashed disabled onClick={action('clicked')}>
        禁用
      </Button>


      <Button type="primary" hollow loading={true} onClick={action('clicked')}>
        加载中
      </Button>

      <Button type="primary" hollow block onClick={action('clicked')}>
        100%
      </Button>

      <h2>禁用状态</h2>
      <Button disabled onClick={action('clicked')}>
        默认
      </Button>

      <Button type="primary" disabled onClick={action('clicked')}>
        主色调
      </Button>

      <Button type="info" disabled onClick={action('clicked')}>
        信息
      </Button>

      <Button type="warning" disabled onClick={action('clicked')}>
        警告
      </Button>

      <Button type="error" disabled onClick={action('clicked')}>
        错误
      </Button>

      <Button type="success" disabled onClick={action('clicked')}>
        成功
      </Button>

      <Button type="primary" disabled block onClick={action('clicked')}>
        100%
      </Button>

      <Button disabled hollow onClick={action('clicked')}> 默认 </Button>

      <Button type="primary" disabled hollow onClick={action('clicked')}> 主色调 </Button>

      <Button type="info" disabled hollow onClick={action('clicked')}> 信息 </Button>
      <Button type="warning" disabled hollow onClick={action('clicked')}> 警告 </Button>

      <Button type="error" disabled hollow onClick={action('clicked')}> 错误 </Button>

      <Button type="success" disabled hollow onClick={action('clicked')}> 成功 </Button>


      <h2>三种大小</h2>

      <Button type="primary" size="large">
        large
      </Button>

      <Button type="primary">
        default
      </Button>

      <Button type="primary" size="small">
        small
      </Button>

      <h2>圆形按钮</h2>

    

      <Button type="primary" circle size="small">
        小
        </Button>
      <Button type="primary" circle>
        中
        </Button>
      <Button type="primary" circle size="large">
        大
        </Button> */}
    </div>
  )
);
