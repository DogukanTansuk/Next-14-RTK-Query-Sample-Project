// Package Imports
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {LoginComponent} from '../components/LoginComponent'

describe('LoginComponent -> Test Cases', () => {
  it('should match with LoginComponent snapshot', () => {
    const rendered = render(<LoginComponent />)

    expect(rendered).toMatchSnapshot()
  })
})
