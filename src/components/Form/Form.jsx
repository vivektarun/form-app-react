function Form() {
    return (
        <div>
            New form
            <form action="">
                <div className="email-input-wrapper">
                    <input type="email" />
                </div>
                <div className="password-input-wrapper">
                    <input type="password" />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;