import {useState,ComponentType,useEffect} from "react";
import styles from "./styles.module.css";
import TodoItem from "../TodoItem/index";
import {motion,AnimatePresence} from "framer-motion";
import { connect,Matching } from "react-redux";
import CreateTodo from "../createTodo/index";
import { GlobalState,Todo,User } from "../../models";
import { getTodos } from "../../services/todos";

interface Props{
}

interface InjectedProps extends Props{
    todos: Todo[];
    user: User | null;
}

const container = {
  hidden: { opacity: 0, x: -100},
  show: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
        delay: 0.05 * index,
        staggerChildren: 0.5
    }
  })
}


const TodoList:ComponentType<Matching<{ todos: Todo[]; user: User | null } & { appendData: (type: string, content: any) => void; }, Matching<Props, InjectedProps>>> = ({todos,user}) => {
    const [modalOn,setModalOn] = useState<boolean>(false);
    const [id,setId] = useState<string | null>(null)

    useEffect(() => {
        if(user) getTodos(user!.uid);
    },[])

    return(
        <div>
            <div className={styles.header}>
                <h3>To Do List</h3>
                <motion.button
                    whileHover={{borderRadius: "15px"}}
                    className={styles.add_btn}
                    onClick={() => setModalOn(true)}
                >
                    <i className="fas fa-plus" ></i>
                </motion.button>
            </div>
            
            <div className={styles.todos_container} >
                {todos.map((item,index) => (
                    <motion.div
                        key={item.id}
                        custom={index}
                        variants={container}
                        initial="hidden"
                        animate="show"
                        whileHover={{scale: 1.02}}
                    >
                        <TodoItem item={item} edit={setId} />
                    </motion.div>
                ))}
                <motion.button onClick={() => setModalOn(true)} className={styles.createItem_button} >
                    <i className="fas fa-plus" ></i>
                </motion.button>
            </div>

            <AnimatePresence>
                {(modalOn || id) && (
                    <motion.div className={styles.modal_container} >
                        <CreateTodo id={id} close={() => (setModalOn(false),setId(null))} todos={todos} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const mapStateToProps = (state:GlobalState) => ({
    todos: state.todos,
    user: state.user
})

const mapDispatchToProps = (dispatch:any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);