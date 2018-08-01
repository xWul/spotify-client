import React from 'react'
import renderer from 'react-test-renderer'

import List from './List'

const MockTracks = [
  {
    id: '0',
    name: 'Test 1',
    album: {name: 'Tests', images: [{url: ''}]},
    artists: ['art 1'],
    duration_ms: 924548
  },
  {
    id: '1',
    name: 'Test 2',
    album: {name: 'Test',  images: [{url: ''}]},
    artists: ['art 1', 'art 2'],
    duration_ms: 22333
  }
]


describe('List Tracks', function () {
  test('Tracks List renderer empty', () => {
    const component = renderer.create(
      <List />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Tracks List renderer with data', () => {
    const component = renderer.create(
      <List items={MockTracks}/>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
