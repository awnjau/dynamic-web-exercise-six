import styles from "./components.module.css";

const UserProfileCard = () =>{
    return(
        <div className={styles.UserProfiles}>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserProfileCard;