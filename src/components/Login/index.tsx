import { ComponentType, Dispatch, SetStateAction,useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect, Matching } from "react-redux";
import styles from "./styles.module.css";
import appendData from "../../redux/actions";
import {GlobalState} from "../../models";
import {User} from "../../models";
import {signInWithGoogle,signIn} from "../../services/public";


interface Props{
    setOnLogin: Dispatch<SetStateAction<boolean>>;
}

interface InjectedProps extends Props{
    user: User
}

const Login:ComponentType<Matching<{ user: User | null; } & { appendData: (type: string, content: any) => void; }, Matching<Props, InjectedProps>>> = 
    ({
        setOnLogin,
        user
    }) => {

    const navigate = useNavigate();
    const [formData,setFormData] = useState({password:"",email:""})

    const handleOnSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        await signIn(formData.email,formData.password);
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }



    return(
        <div className={styles.container} >
            {user ? (
            <>
                <img className={styles.user_photo} src={user.photoURL} alt="" />
                <button className={styles.signin_button} onClick={() => navigate('/')} >Continue as {user.username}</button>
                <button className={styles.switch_account_button} >Switch Account</button>
            </>) : (
                <>
                    <button className={styles.signin_with_google_button} onClick={signInWithGoogle} >Sign in with Google</button>
                    <form className={styles.form} onSubmit={handleOnSubmit} >
                        <h3>Sign In</h3>
                        <input type="text" name="email" value={formData.email} onChange={handleOnChange} placeholder="Email" />
                        <input type="password" name="password" value={formData.password} onChange={handleOnChange} placeholder="Password" />
                        <button type="submit" className={styles.submit_button} >Sign In</button>
                    </form>
                    <button
                        className={styles.toggle}
                        onClick={() => setOnLogin(false)}     
                        type="button"
                    >Don't have an account ?</button>
                </>
            )}
        </div>
    )
}
const mapDispatchToProps = {
    appendData
}

const mapStateToProps =(state:GlobalState) => ({
    user: state.user
})

 
export default connect(mapStateToProps,mapDispatchToProps)(Login);