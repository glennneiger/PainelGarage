import styled from 'styled-components'

export const OficinaMain = styled.main`
    color: #3D3D3D;
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 30px;
    background-color: #F9F9F9;
    margin: 10px;
    .text-aprov { font-size: 18px; margin-right: 10px; }
    img {
        border-radius: 3px;
        width: 330px;
    }
    .grid-servico {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
    }
    .servicos {
        text-align: center;
        font-weight: 700;
        border-radius: 3px;
        height: auto;
        padding: 3px;
        background-color: var(--color-cinza-dark);
    }
    .opcoes { button { display: block; } }
    .info-inline { display: flex; align-items: center;}
    .d-flex { align-items:center; margin: 10px 0; justify-content: space-between; }
`