import styled from 'styled-components'

export const StyledInputWrapper = styled.div`
    position: relative;
`

export const StyledInput = styled.input`
    width: calc(100%);
    outline: 0;
    border: none;
    background: inherit;
    padding: 16px 16px 16px 60px;
    font-size: 24px;
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
    -webkit-box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
    -moz-box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
    color: inherit;
    &::placeholder {
        font-style: italic;
        opacity: 0.3;
    }
`

export const StyledIcon = styled.label`
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%) rotate(90deg);
    -webkit-transform: translateY(-50%) rotate(90deg);
    -moz-transform: translateY(-50%) rotate(90deg);
    -ms-transform: translateY(-50%) rotate(90deg);
    -o-transform: translateY(-50%) rotate(90deg);
    &::before {
        content: '❯';
        font-size: 22px;
        color: #e6e6e6;
    }
`