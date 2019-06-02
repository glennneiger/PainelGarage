import styled from 'styled-components'


export const Categoria = styled.div`
    padding: 20px;
    width: 90%;
    height: auto;
    h1 { font-size: 22px; font-weight: 500; }
    .title { font-size: 16px; }
    .servico {
        display: flex;
        width: 400px;
        height: 100%;
        margin: 10px;
        padding: 10px;
        background-color: var(--color-cinza);
        box-shadow: 0px 0px 5px var(--color-cinza);
        button { margin: 5px; }
    }
    .categorias { display: flex; flex-wrap: wrap; }
`