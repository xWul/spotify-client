import React from 'react'
import renderer from 'react-test-renderer'
import Options from './Options'

test('Select renderer without crash with selected album', () => {
  const component = renderer.create(
    <Options selected={'album'} />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
