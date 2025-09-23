import { useContext, useImperativeHandle, useRef, useState } from "react";
import FormContext from "../../providers/FormContext";
import './Input.css'

function Input({id, name, type, inputType, label, inputRef}) {

    const {formInput, setFormInput} = useContext(FormContext);

    const [text, setText] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [shake, setShake] = useState(false)

    //introduce local ref // local to component
    const localRef = useRef(null);

    useImperativeHandle(inputRef, () => {
        return {
            focus: () => localRef.current.focus(),
            setInvalid: () => setIsValid(false),
            shake: () => setShake(true)
        }
    }, [])
    

    return (
        <>
            <div>
                {inputType}
            </div>
            <div>
                <input
                    className={`${(!isValid) ? "error-input" : ""} ${(shake) ? 'shake' : ""}`}
                    ref={localRef} // here is the actual element so we pass here ref property.
                    id={id}
                    name={name}
                    type={type}
                    value={text}
                    onChange={(event) => {
                        setText(event.target.value)
                        setFormInput({...formInput, [label]: event.target.value})
                    }}
                />
            </div>
        </>
    )
}

export default Input;