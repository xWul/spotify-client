import React from 'react'
import renderer from 'react-test-renderer'
import Alert from './Alert'

test('Button renderer without crash', () => {
  const component = renderer.create(
    <Alert>Testing</Alert>,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
