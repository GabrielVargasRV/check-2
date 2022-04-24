import Header from "../components/Header";
import {Props} from "./models";

const Layout: React.FC<Props> = ({children}) => {
    return(
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default Layout;