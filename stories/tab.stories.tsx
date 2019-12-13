import React from 'react'
import { storiesOf } from '@storybook/react'
import { text,date } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import Tabs  from '../src/Tabs/tabs'
const stories = storiesOf('Tabs', module)

stories.add(
    'with text',
    withInfo({
      inline: true,
      text: 'A simple button'
    })(() => (
      <Tabs
        desc={date('date', undefined)}
        text={text('text', 'Hello')}
      />
    )),
  );
  
  stories.add(
    'with emoji',
    withInfo({
      inline: true,
      text: 'A simple button with some flare'
    })(() => (
      <Tabs
      desc={date('date', undefined)}
        text={text('text', '👻 👽 🤖 💩!')}
      />
    )),
  );