import React from 'react'
import renderer from 'react-test-renderer'
import InputText from './InputText'

test('InputText renderer without crash', () => {
  const component = renderer.create(
    <InputText placeholder={'testing'}/>,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
