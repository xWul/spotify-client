import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import mockFetch from '../../api/mockFetch'
import Album from './index'

describe('Album', function () {
  test('Albums renderer without crashing', () => {
    fetch = mockFetch({albums: {items: []}})
    const component = renderer.create(
      <Router><Album /></Router>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
