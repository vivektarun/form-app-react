import { useEffect, useRef, useState } from 'react';
import './Form.css'
import validatePassword from '../../helper/passwordValidator';
import validateEmail from '../../helper/emailValidator';

function Form() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        console.log(emailRef.current);
    }, [])

    // const exampleRef = useRef(0);

    // useEffect(() => {
    //     console.log(exampleRef);
    // }, []);

    //Here we have only 2 input, so we are making 2 usestate but if suppose we have 10 input then ?.
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const handleValidatepassword = () => {
        const password = formValues.password;
        if(!validatePassword(password)) {
            passwordRef.current.focus();
            console.log("password doesn't contain required parameter");
        }
    }

    const handeleValidateEmail = () => {
        emailRef
        const email = formValues.email;
        if(!validateEmail(email)) {
            emailRef.current.focus();
            console.log("email doesn't contain the required parameter");
        }
    }

    //generally when we submit the form, page automatically refresh
    //we don't want that
    function handleFormSubmit(event) {
        event.preventDefault();
        handleValidatepassword();
        handeleValidateEmail();
        console.log(formValues);


        //This is not suggested, because we should come out of dom manupulation and use the power of react.
        // document.getElementById('email-input').focus();

        //After submiting the form clear the field.
        setFormValues({email: "", password: ""});
    }
    return (
        <div>
            New form
            <form onSubmit={handleFormSubmit}>
                <div className="wrapper email-input-wrapper">
                    <label >Email: </label>
                    <input 
                        id='email-input'
                        placeholder='email'
                        name='email'
                        type="text" 
                        value={formValues.email}
                        onChange={(event) => setFormValues( {...formValues, email: event.target.value})}
                        ref={emailRef}
                    />
                </div>
                <div className="wrapper password-input-wrapper">
                    <label >Password: </label>
                    <input 
                        id='password-input'
                        placeholder='password'
                        name='email'
                        type="text" 
                        value={formValues.password}
                        onChange={(event) => setFormValues({...formValues, password: event.target.value})}
                        ref={passwordRef}
                    />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;


/**
 * useRef -> it helps you to reference a value that is not needed for re-rendering.
 * it returns an object, there is a current key with initial value is set.
 * useRef(0) -> here 0 is the initial value.
 * updating the value of a ref doesn't trigger re-render. | doesn't cause the re-render.
 * although it doesn't re-render but react remembers its value.
 * we can store information bw two re-renders. that can't be achieved by the local variables.
 * becasue in local variable whole function re-renders and the local variable is re-initiated.
 * but we can remember refrence variable bw two re-renders.
 * 
 * changes in refs doesn't cause the re-rendering, as in useState causes and
 * ref variable is local to every component, suppose we are rendering any component three times 
 * all of these three component will have different refs local to them.
 */