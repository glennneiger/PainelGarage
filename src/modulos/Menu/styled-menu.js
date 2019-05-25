import styled from 'styled-components'

export const MenuHeader = styled.header`
    height: 100vh;
    width: 250px;
    border-right: 1px solid gray;
    .image {
        background-color: #FF9468;
        display: flex;
        margin-bottom: 40px;
        align-items: center;
        padding-left: 20px;
        p { padding-left: 10px; }
        img {
            width: 50px;
            height: 50px;
            border-radius: 100%;
            margin-bottom: 10px;
            margin-top: 20px;
            object-fit: cover;
        }
    }
`