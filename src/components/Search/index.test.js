import React from 'react'
import renderer from 'react-test-renderer'
import enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Search from './index'
import Options from './Options'

enzyme.configure({ adapter: new Adapter() })

describe('Search', () => {
  test('Search renderer without crash', () => {
    const component = renderer.create(
      <Search />,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Search changes state', () => {
    const handleChange = jest.fn()
    const event = { target: { name: 'option', value: 'test' } }
    const wrapper = shallow(<Search />)
  
    wrapper.find(Options).simulate('change', event)
    const state = wrapper.instance().state
    expect(state).toEqual({option: 'test', query: ""})
  })

  test('Search submit form', () => {
    const onSubmit = jest.fn()
    const component = mount(<Search  onSubmit={onSubmit} /> )
    component.simulate('submit')
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

})


