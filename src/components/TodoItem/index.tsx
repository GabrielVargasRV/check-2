import {useState} from "react";
import {Props} from "./modals";
import * as moment from "moment";
import styles from "./styles.module.css";
import {update,deleteTodo} from "../../services/todos";

const TodoItem: React.FC<Props> = ({item,edit}) => {
    const [isDone,setIsDone] = useState<boolean>(item.isDone);

    const handleDone = () => {
        if(isDone) return;
        setIsDone(true);
        update(item.title,item.theme,true,item.id);
    }

    return(
        <div className={`${styles.container} ${styles[item.theme]}`}>
            <div className={styles.top}>
                {isDone ? (
                    <i  className={`${styles.done_icon} fas fa-check-circle`}></i>
                ) : (
                    <button onClick={handleDone} >
                        <i className={`${styles.check_circle} ${styles[item.theme + "_font"]} far fa-check-circle`} ></i>
                    </button>
                )}
                <div style={{ display: 'flex' }} >
                    <button onClick={() => edit(item.id)} >
                        <i className={`${styles.edit} ${styles[item.theme + "_font"]} fas fa-edit`}></i>
                    </button>
                    <button onClick={() => deleteTodo(item.id)} >
                        <i className={`${styles.delete_icon} ${styles[item.theme + "_font"]} fas fa-trash-alt`}></i>
                    </button>
                </div>
            </div>
            <div className={styles.content} >
                <p className={`${styles.title} ${styles[item.theme + "_font"]}`}>{item.title}</p>
            </div>
            <div className={styles.date} >
                <p>{moment(new Date(item.date)).fromNow()}</p>
            </div>
        </div>
    );
}

export default TodoItem;