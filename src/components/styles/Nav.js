import styled from 'styled-components'

export const StyledNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    font-size: 14px;
    & .links-wrapper {
        display: flex;
        align-items: center;
        & > *:not(:last-child) {
            margin-right: 3px;
        }
        & a {
            font-size: inherit;
            padding: 3px;
            border-radius: 5px;
            &:hover {
                border: 1px solid rgba(175, 47, 47, 0.2) !important;
            }
        }
        & button {
            color: rgb(77, 77, 77);
            font-size: 14px;
        }
    }
    & button {
        color: inherit;
        font-size: inherit;
        &:hover {
            text-decoration: underline;
        }
    }
`