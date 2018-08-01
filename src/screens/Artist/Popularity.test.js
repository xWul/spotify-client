import React from 'react'
import renderer from 'react-test-renderer'

import Popularity from './Popularity'

describe('Popularity Artist', function () {
  test('Popularity Artist component renderer default', () => {
    const component = renderer.create(
      <Popularity popularity={0} />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Popularity Artist component renderer default', () => {
    const component = renderer.create(
      <Popularity  popularity={90} />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
