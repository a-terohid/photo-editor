import { toast } from 'react-toastify';

export const notify = ( type , massage ) => {
    if ( type === true ){
        toast.success( massage , {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            // progress: undefined,
            theme: "dark"
            });
    } else if ( type === false ) {
        toast.error( massage , {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            // progress: undefined,
            theme: "dark"
            });
    }
}