import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successToast = (msg, pos) => {
    toast.success(msg, {
        position: pos,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}


export const warningToast = (msg, pos) => {
    toast.warn(msg, {
        position: pos,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}
