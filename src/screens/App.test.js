import React from 'react'
import { withRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

describe('App', () => { 
  test('renders App component', () => {
    const component = renderer.create(
      <Router><App /></Router>,
    )  
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})