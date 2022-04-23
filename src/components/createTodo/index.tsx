import {useState,useEffect} from "react";
import styles from "./styles.module.css";
import {Props} from "./modals";
import {Todo} from "../../models/index";

import { create,update } from "../../services/todos";

import {motion} from 'framer-motion';

const CreateTodo: React.FC<Props> = ({id,close,todos}) => {
    const [theme, setTheme] = useState<string>('gray');
    const [title, setTitle] = useState<string>('');
    const [isDone,setIsDone] = useState<boolean>(false);

    useEffect(() => {
        if (id) {
            const filteredTasks = todos.filter((i:Todo) => i.id === id)
            const task = filteredTasks[0]
            setTheme(task.theme);
            setTitle(task.title);
            setIsDone(task.isDone);
        }
    }, [id])

    return(
            <div className={styles.container} >
            <div className={styles.header} >
                <i style={{ width: 30 + 'px', }} ></i>
                <p className={styles.title} >Create Today Task</p>
                <motion.button whileHover={{borderRadius: "15px"}} className={styles.close_btn} onClick={() => close()} >
                    <i className={`fas fa-times`}  ></i>
                </motion.button>
            </div>
            <div className={styles.form + " " + styles[theme]} >
                <input 
                    className={`${styles.title_input} ${styles[theme + "_font"]}`}
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)} 
                />
            </div>
            <div className={styles.grade_colors} >
                <button className={styles.gray_btn} onClick={() => setTheme('gray')} ></button>
                <button className={styles.dark_btn} onClick={() => setTheme('dark')} ></button>
                <button className={styles.blue_btn} onClick={() => setTheme('blue')} ></button>
                <button className={styles.yellow_btn} onClick={() => setTheme('yellow')} ></button>
                <button className={styles.red_btn} onClick={() => setTheme('red')} ></button>
            </div>
            <button className={styles.save_button} onClick={() => {
                id ? update(title,theme,isDone,id) : create(title,theme)
                close()
            }} >{id ? 'Update' : 'Create'}</button>
        </div>
    )
}

export default CreateTodo;