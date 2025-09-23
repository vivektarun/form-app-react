import { useContext, useRef } from 'react';
import Input from '../Input/Input';
import FormContext from '../../providers/FormContext';

function Form() {
    
    const {formInput} = useContext(FormContext);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    function handleFormSubmit(event) {
        event.preventDefault();
        // we have access to form input here, that means validation can occur here.
        console.log(formInput);
        emailRef.current.setInvalid();
        emailRef.current.shake();
    }

    return (
        <div>
            New form
            <form onSubmit={handleFormSubmit} noValidate>
                <div className="wrapper email-input-wrapper">                
                    <Input
                        id={"email-input"}
                        name={"email"}
                        type={"email"}
                        inputType={"Email: "}
                        inputRef={emailRef}
                    />
                </div>
                <div className="wrapper password-input-wrapper">
                    <Input 
                        id={"password-input"}
                        name={"email"}
                        type={"text"}
                        inputType={"Password: "}
                        inputRef={passwordRef}
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

/**
 * There are 3 available wasy to validate/submit form
 * 1. full fledget 3rd party lib (react hook form)
 * 2. controlled component
 * 3. unControlled component
 */

/**
 * what is controlled component
 * it involves manual state management, which can cause irrelevent re-renders
 * when using a controlled component, you write an event handler for every way your data can change.
 * controlled components also require you to maintain all the validation logic.
 */

/**
 * 
 */