import React, { useContext } from 'react'
import { StyledLayout, StyledHeading, FormWrapper } from './styles/Layout'
import Form from './Form'
import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../AppProvider'

const Layout = () => {

  const { todoItems } = useContext(AppContext)

  return (
    <StyledLayout>
        <StyledHeading>todos</StyledHeading>
        <FormWrapper>
            <Form />
            <ul>
              <Outlet />
            </ul>
            { todoItems.length > 0 && <Nav /> }
        </FormWrapper>
        <Footer />
    </StyledLayout>
  )
}

export default Layout