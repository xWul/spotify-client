import React from 'react'
import renderer from 'react-test-renderer'
import LikeButton from './LikeButton'

describe('Like Button', () => {
  test('LikeButton default renderer without crashing', () => {
    const component = renderer.create(
      <LikeButton />,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('LikeButton checked renderer without crashing', () => {
    const component = renderer.create(
      <LikeButton isChecked={true} onClick={() => {}}/>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
