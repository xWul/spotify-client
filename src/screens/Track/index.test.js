import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import mockFetch from '../../api/mockFetch'
import Tracks from './index'

describe('Tracks', function () {
  test('Tracks renderer without crashing', () => {
    fetch = mockFetch({tracks: {items: []}})
    const component = renderer.create(
      <Router><Tracks /></Router>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
