import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import mockFetch from '../../api/mockFetch'
import Artist from './index'

describe('Artist', function () {
  test('Artists renderer without crashing', () => {
    fetch = mockFetch({artists: {items: []}})
    const component = renderer.create(
      <Router><Artist /></Router>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
