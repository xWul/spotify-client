import React from 'react'
import renderer from 'react-test-renderer'
import mockFetch from '../../api/mockFetch'
import Album from './Albums'

describe('Album Artist', function () {
  test('Artists Album renderer without crashing', () => {
    fetch = mockFetch({})
    const component = renderer.create(
      <Album />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
