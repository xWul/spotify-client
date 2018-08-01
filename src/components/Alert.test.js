import React from 'react'
import renderer from 'react-test-renderer'
import Alert from './Alert'

test('Alert renderer without crashing', () => {
  const component = renderer.create(
    <Alert>Testing</Alert>,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
