import styles from './form.module.css'

const Form = () => {
    const handleSubmit = e => {

    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="newItem" className={styles.label}>New Item</label>
            <input
                id="newItem"
                type="text"
                className={styles.input}
                value=""
                onChange={() => {
                }} // need to implement
            />
        </form>
    );
}

export default Form;
