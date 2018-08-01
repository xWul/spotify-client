import React from 'react'
import renderer from 'react-test-renderer'
import Loader from './Loader'

test('Loader renderer without crashing', () => {
  const component = renderer.create(
    <Loader />,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
