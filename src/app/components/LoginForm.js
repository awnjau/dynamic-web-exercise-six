import styles from './components.module.css';

const LoginForm = () =>{
    return(
        <div>
            <h2>Login Form</h2>
            <form className={styles.Form}>

                <label htmlForm="email">Email</label>
                <input type="email" name="email" />

                <label htmlForm="pass">Password</label>
                <input type="password" name="pass" />
                
                <button type = "submit">Create User</button>
            </form>
        </div>
    );
};

export default LoginForm;