import {toast} from 'react-toastify';

const notify = (type: string,content: string | JSX.Element) => {
    switch (type) {
        case "success":
            toast.success(content);
            break;
        
        case "error":
            toast.error(content);
            break;

        case "warning":
            toast.warning(content);

        default:
            toast(content);
    }
}


export default notify;