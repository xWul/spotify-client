import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Search from './index'
import Form from './Form'

enzyme.configure({ adapter: new Adapter() })

describe('Search Component', () => {
  test('Search component renderer without crashing', () => {
    const component = renderer.create(
      <Router><Search /></Router>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
