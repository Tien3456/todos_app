import styled from 'styled-components'

export const StyledLayout = styled.div`
    background: #f5f5f5;
    min-width: 100vw;
    min-height: 100vh;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledHeading = styled.h1`
    color: rgba(175, 47, 47, 0.15);
    font-size: 100px;
    font-weight: 100;
`

export const FormWrapper = styled.div`
    position: relative;
    width: 550px;
    color: rgb(77, 77, 77);
    background: #fff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
    -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
    @media (max-width: 600px) {
        width: 98%;
    }
    &::before {
        position: absolute;
        content: "";
        top: 100%;
        left: 4px;
        width: calc(100% - 8px);
        height: 4px;
        background: inherit;
        box-shadow: inherit;
    }
    &::after {
        position: absolute;
        content: "";
        top: calc(100% + 4px);
        left: 8px;
        width: calc(100% - 16px);
        height: 4px;
        background: inherit;
        box-shadow: inherit;
    }
`