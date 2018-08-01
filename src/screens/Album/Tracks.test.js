import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import mockFetch from '../../api/mockFetch'
import Tracks from './Tracks'

describe('Tracks', function () {
  test('Tracks renderer without crashing', () => {
    fetch = mockFetch({tracks: []})
    const component = renderer.create(
      <Tracks />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
