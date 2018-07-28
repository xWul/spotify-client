import React from 'react'
import 'reset-css'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import globalStyle  from '../theme/globalStyle'

/* UI  */
import Select from '../components/ui/Select'
import InputText from '../components/ui/InputText'
import Button from '../components/ui/Button'

/* COMPONENTS */
import Options from '../components/Search/Options'
import Search from '../components/Search'

globalStyle()

storiesOf('UI', module)
  .add('Select', () => <Select><option>Option 1</option></Select>)
  .add('Input Text', () => <InputText placeholder={'Type what you want'}/>)
  .add('Button', () => <Button>Click</Button>)

storiesOf('Search', module)
  .add('Options', () => <Options onChange={action('changed')} />)
  .add('Search Bar', () => <Search onSubmit={action('submited')} />)
  