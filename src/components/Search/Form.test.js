import React from 'react'
import renderer from 'react-test-renderer'
import enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Form from './Form'
import Options from './Options'

enzyme.configure({ adapter: new Adapter() })

describe('Search Form', () => {
  test('Form renderer without crash', () => {
    const component = renderer.create(
      <Form />,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Form changes state', () => {
    const handleChange = jest.fn()
    const event = { target: { name: 'option', value: 'test' } }
    const wrapper = shallow(<Form />)
  
    wrapper.find(Options).simulate('change', event)
    const state = wrapper.instance().state
    expect(state).toEqual({option: 'test', query: ""})
  })

  test('Form submit form', () => {
    const onSubmit = jest.fn()
    const component = mount(<Form  onSubmit={onSubmit} /> )
    component.simulate('submit')
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

})


