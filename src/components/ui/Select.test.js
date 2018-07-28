import React from 'react'
import renderer from 'react-test-renderer'
import Select from './Select'

test('Select renderer without crash', () => {
  const component = renderer.create(
    <Select>
      <option value={'1'}>1</option>
      <option value={'2'}>2</option>
    </Select>,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
