import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App from './App'

describe('App', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  
  test('renders App component', () => {
    const component = renderer.create(
      <App />,
    )
  
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})