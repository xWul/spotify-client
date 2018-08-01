import React from 'react'
import renderer from 'react-test-renderer'

import List from './List'

const MockAlbums = [
  {
    id: '0',
    name: 'Test 1',
    images: [],
    artists: ['0', '1', '2'],
    available_markets: ['BR']
  },
  {
    id: '1',
    name: 'Test 2',
    images: [{url: ''}],
    artists: ['test'],
    available_markets: ['CH']
  },
]

describe('List Albums', function () {
  test('Albums List renderer empty', () => {
    const component = renderer.create(
      <List />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Albums List renderer with data', () => {
    const component = renderer.create(
      <List items={MockAlbums}/>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
