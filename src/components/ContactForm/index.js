import React from 'react';
import {Container,
        FormWrap,
        FormContent,
        FormInput,
        Form,
        FormLabel,
        FormH1,
        FormButton,
        FormInputTxtarea

} from './FormElement';
const ContactForm = () =>{
   
    return (
      <>
       <Container>
          <FormWrap>
            <FormContent>
              <Form action ="#">

                <FormH1> Contact  us</FormH1>
                <FormLabel htmlFor ='for'>Email</FormLabel>
                <FormInput type ="email" placeholder="Enter your email"></FormInput>
                <FormLabel htmlFor ='for'>Phone</FormLabel>
                <FormInput type ="phone" placeholder="Enter your phone"></FormInput>
                <FormLabel htmlFor ='for'>Subject</FormLabel>
                <FormInput type ="text" placeholder="Enter your subject"></FormInput>
                <FormLabel htmlFor ='for'>message</FormLabel>
                <FormInputTxtarea type ="textarea " height="200px"  placeholder="Enter your message"></FormInputTxtarea>
                <FormButton type ="submit">Submit</FormButton>


              </Form>
            </FormContent>

          </FormWrap>
       </Container>

       </>
    )
}

export default ContactForm;