import styles from "./styles.module.css";
import PomodoroTimer from "../../components/PomodoroTimer";
import TodoList from "../../components/TodoList/index";


const Home = () => {

    return(
        <div className={styles.container}>
            <PomodoroTimer />
            <TodoList />
        </div>
    );
}

export default Home;