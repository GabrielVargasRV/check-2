import {connect,Matching} from "react-redux";
import {User} from "../../models/index";
import {ComponentType} from "react";
import { GlobalState } from "../../models";
import {signout} from "../../services/public";
import {Props} from "./modals";
import styles from "./styles.module.css";

const Header: ComponentType<Matching<{ user: User | null; }, Props>>= ({user}) => {
    return(
        <div className={styles.container} >
            {user ? (
                <>
                    <button onClick={() => signout()} className={styles.signout_btn} >Sign out</button>
                    <img className={styles.user_photo} src={user.photoURL} alt="" />
                </>
            ) : (
                <>
                    <div></div>
                    <div className={styles.user_photo_empty} ></div>
                </>
            )}
        </div>
    )
}

const mapDispatchToProps = () => ({});
const mapStateToProps = (state: GlobalState) => ({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);