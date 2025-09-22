import { useState } from 'react';
import './Form.css'
import validatePassword from '../../helper/passwordValidator';
import validateEmail from '../../helper/emailValidator';

function Form() {

    //Here we have only 2 input, so we are making 2 usestate but if suppose we have 10 input then ?.
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const handleValidatepassword = () => {
        const password = formValues.password;
        if(validatePassword(password)) {
            console.log("password doesn't contain required parameter");
        }
    }

    const handeleValidateEmail = () => {
        const email = formValues.email;
        if(validateEmail(email)) {
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
                        placeholder='email'
                        name='email'
                        type="text" 
                        value={formValues.email}
                        onChange={(event) => setFormValues( {...formValues, email: event.target.value})}
                    />
                </div>
                <div className="wrapper password-input-wrapper">
                    <label >Password: </label>
                    <input 
                        placeholder='password'
                        name='email'
                        type="text" 
                        value={formValues.password}
                        onChange={(event) => setFormValues({...formValues, password: event.target.value})}
                    />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;