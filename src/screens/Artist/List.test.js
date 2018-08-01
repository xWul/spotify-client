import React from 'react'
import renderer from 'react-test-renderer'

import List from './List'

const MockArtists = [
  {
    id: '0',
    name: 'Test 1',
    images: [],
    genres: ['pop'],
    popularity: 80
  },
  {
    id: '1',
    name: 'Test 2',
    images: [{url: ''}],
    genres: ['rock', 'pop'],
    popularity: 90
  }
]


describe('List Artist', function () {
  test('Artists List renderer empty', () => {
    const component = renderer.create(
      <List />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Artists List renderer with data', () => {
    const component = renderer.create(
      <List items={MockArtists}/>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
