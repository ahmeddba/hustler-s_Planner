import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { clearFail } from '../../JS/Actions/AuthActions';
import { ToastContainer, toast } from 'react-toastify';



const ErrorNotification = ({error}) => {

    const dispatch = useDispatch();
    const [show , setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {

            dispatch(clearFail());
            setShow(false);
    }, 3000)

    } , [show , dispatch])
    const customId = "";
  return (
    <div>
{
    show && (
        <div>
            {toast.error(error.msg , {
                toastId: customId
            })}
            <ToastContainer
                position="bottom-right"
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            </div>
    )
}
    </div>
  )
}

export default ErrorNotification
