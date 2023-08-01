
const MyForm = (props) => {
    const handleChange = (event) => {
        props.setValue(event.target.value);
    };
    const handleSubmit = () => {
        props.setSubmit(true);
    };

    return (
        <div className="form__name">
            <label className="form__label" htmlFor="name">Имя логина</label>
            <input onChange={handleChange}
                value={props.value} placeholder="Введите логин"
                autoComplete="off"
                className="form__input"
                type="text"
                id="name" name="name" />
            <button  onClick={handleSubmit} className="form__btn"></button>
        </div>
    )
}
export default MyForm;