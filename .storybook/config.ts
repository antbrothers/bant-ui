/*
 * @Author: linjianxi
 * @Date: 2019-12-12 16:42:41
 * @LastEditTime: 2019-12-13 15:21:17
 * @Description: file content
 */
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import "./storystyles.css"
import "../node_modules/tachyons/css/tachyons.css"

const req = require.context('../stories', true, /.stories.tsx$/);
addParameters({
  viewport: { defaultViewport: 'iphone6' }
})
function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withInfo());
addDecorator(withKnobs);


configure(loadStories, module);