import styled from 'styled-components'

 export const FormSection = styled.section`
    position: absolute;
    width: 700px;
    left: 0; 
    right: 0; 
    top: 20%;
    margin-left: auto; 
    margin-right: auto; 
    z-index: 999999;
    height: 400px;
    background-color: var(--color-cinza);
    .linha-laranja {
        width: 100%;
        height: 7px;
        background-color: var(--color-primary);
        border-radius: 3px 3px 0px 0px;
    }
    .form-group { margin: 30px 0; }
    input {margin: 0;}
    input[type=submit] { color: white; }
    form {padding: 40px;}
    .formL { display: flex; align-items: center; justify-content: space-between; }
`

export const LoginMain = styled.main`
    width: 100%;
    header {
        position: relative;
        h1 {
            position: absolute;
            z-index: 999;
            text-align: center;
            right: 50%;
            top: 20%;
        }
        .bg-cinza {
            position: absolute;
            width: 100%;
            height: 250px;
            background-color: rgba(255, 255, 255, 0.5);
            z-index: 99;
        }
        img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            object-position: 0px -400px;     
        }
        
    }
`