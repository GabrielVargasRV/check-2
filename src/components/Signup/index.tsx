import {useState} from 'react';
import styles from "./styles.module.css";
import {Props,FormData} from "./models";


const Signup: React.FC<Props> = ({setOnLogin}) => {
    const [formData,setFormData] = useState<FormData>({name:"",email:"",password:""});

    const handleOnSubmit = (e: React.FormEvent) => {

    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return(
        <div className={styles.container}>
            <form className={styles.form}  onSubmit={handleOnSubmit} >
                <h3>Sign up</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleOnChange}
                    value={formData.name}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email" 
                    onChange={handleOnChange}
                    value={formData.email}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleOnChange}
                    value={formData.password}
                    required
                />
                <button className={styles.submit_button} type="submit" >Sign up</button>
            </form>
            <button className={styles.toggle} type="button" onClick={() => setOnLogin(true)} >You already have an account ?</button>
        </div>
    )
}

export default Signup;