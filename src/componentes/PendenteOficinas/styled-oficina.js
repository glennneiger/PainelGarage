import styled from 'styled-components'

export const Oficinas = styled.section`
    width: 95%;
    margin: auto;
    background-color: white;
    .oficina {
        background-color: var(--color-cinza);
        border-radius: 3px;
        margin-top: 10px;
        display: flex;
        .titulo {
            padding: 20px; 
            p { 
                margin: 10px 0;
            }
        }
        .statusAprovacao {
            width: 120px;
            text-align: center;
            font-weight: 500;
            color: white;
            border-radius: 3px;
            background-color: var(--color-verde);
        }
        h3 {padding: 10px;}
        img { border-radius: 3px 0px 0px 3px; }
        box-shadow: 0px 5px 5px var(--color-cinza);
    }
    .botoes { 
        float: right;
        button { display: block; margin: 10px 0;} 
    }
`