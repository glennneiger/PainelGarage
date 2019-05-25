import styled from 'styled-components'

export const ProdutoMain = styled.main`
    width: 80%;
    margin: auto;
    h2 { margin: 10px 0;}
    .inputInline {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        width: 100%;
        div {
            width: 100%;
            :first-child {
                margin-right: 10px;
            }
            :last-child {
                margin-left: 10px;
            }
        }
    }
    input[type=text], textarea {
        padding: 10px;
        width: 100%;
        height: 40px;
        border-radius: 3px;
        border: 0;
        box-shadow: 0px 0px 2px gray;
        margin: 5px;
    }
    textarea {
        height: 70px;
    }
    input[type=submit] {
        border: 0;
        border-radius: 3px;
        width: 200px;
        height: 50px;
        font-size: 18px;
        cursor: pointer;
        background-color: var(--color-primary-light);
        margin: 5px;
    }
`