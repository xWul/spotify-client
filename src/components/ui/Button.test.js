import React from 'react'
import renderer from 'react-test-renderer'
import Button from './Button'

test('Button renderer without crash', () => {
  const component = renderer.create(
    <Button type={'button'}>Testing</Button>,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
