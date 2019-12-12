import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Button } from '../src/Button/button'
const stories = storiesOf('Button', module)

stories.add(
    'with text',
    withInfo({
      inline: true,
      text: 'A simple button'
    })(() => (
      <Button
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
      <Button
        text={text('text', '👻 👽 🤖 💩!')}
      />
    )),
  );