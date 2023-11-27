import styles from './components.module.css';

const createUserForm = () =>{
    return(
        <div>
            <h2>Create User</h2>
            <form className={styles.Form}>
                <label htmlForm="name">Name</label>
                <input type="text" name="name" />

                <label htmlForm="email">Email</label>
                <input type="email" name="email" />

                <label htmlForm="pass">Password</label>
                <input type="password" name="pass" />
                
                <button type = "submit">Create User</button>
            </form>
        </div>
    );
};

export default createUserForm;