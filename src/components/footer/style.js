import styled from "styled-components"
import { AuthSubmitButton } from "../../pages/registrationPage/style"

export const ContactUsForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const ContainerImage = styled.img`
    margin-right: 10vw;
`

export const SubmitContactUsButton = styled(AuthSubmitButton)`
    fontWeight: 800;
    fontSize: 17;
    marginBottom: 5vh; 
    border: none;
    backgroundColor: #189967; 
    marginTop: 30px;
    padding: 20px;
    borderRadius: 10px; 
    cursor: pointer; 
    boxShadow: 3px 3.5px #106645;

    &:hover{
        
    }
`

export const StyledTextArea = styled.textarea`
    margin: 8px 0px;
    font-family: 'Montserrat';
    font-size: 16px;
    border-radius: 10px;
    border: 2px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
`