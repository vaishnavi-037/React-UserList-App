import Card from "../UI/Card/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  const context =
    props.users.length === 0 ? (
      <p>No Data added.</p>
    ) : (
      props.users.map((user) => {
        return (
          <li key={user.id}>{`${user.username} (${user.age} years old)`}</li>
        );
      })
    );
  return (
    <Card className={styles.list}>
      <ul>{context}</ul>
    </Card>
  );
};

export default UserList;
