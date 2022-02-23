import styled from 'styled-components'

export const StyledItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ededed;
    & .checkbox-wrapper {
        position: relative;
        flex-basis: 56px;
        & input[type="checkbox"] {
            -webkit-appearance: none;
        }
        & .checkbox-completed {
            background-image: ${props => props.completed
                ? "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E')"
                : "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E')"
            };
            display: ${props => props.isEditting ? "none" : "block"};
            background-size: cover;
            background-position: center;
            width: 40px;
            height: 40px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
        }
    }
    & .label-wrapper {
        flex-basis: calc(100% - 56px);
        padding: 16px 0;
        display: flex;
        box-shadow: ${props => props.isEditting
            ? "rgba(0, 0, 0, 0.2) 0px -1px 5px 0px inset"
            : "none"};
        & form {
            width: calc(100% - 56px);
        }
        & label {
            width: 100%;
            word-break: break-all;
            line-height: 1.2;
            font-weight: 300;
            font-size: 24px;
            text-decoration: ${props => props.completed
                ? "line-through"
                : "none"
            };
            opacity: ${props => props.completed
                ? 0.4
                : 1
            };
            transition: opacity 0.3s ease-out;
            -webkit-transition: opacity 0.3s ease-out;
            -moz-transition: opacity 0.3s ease-out;
            -ms-transition: opacity 0.3s ease-out;
            -o-transition: opacity 0.3s ease-out;
        }
        & input[type="text"] {
            background: inherit;
            width: 100%;
            outline: 0;
            border: none;
            color: inherit;
            font-weight: 300;
            font-size: 24px;
        }
        & .button-wrapper {
            width: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            & button.remove-btn {
                font-size: 18px;
                color: #cc9a9a;
                display: ${props => props.hovered ? "block" : "none"};
                opacity: ${props => props.isEditting 
                    ? 0
                    : (
                        props.hovered
                            ? 1
                            : 0
                    )
                };
                transition: opacity 0.3s ease-out;
                -webkit-transition: opacity 0.3s ease-out;
                -moz-transition: opacity 0.3s ease-out;
                -ms-transition: opacity 0.3s ease-out;
                -o-transition: opacity 0.3s ease-out;
            }
        }
    }
`