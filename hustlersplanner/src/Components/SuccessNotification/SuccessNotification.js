import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { clearSuccess } from '../../JS/Actions/AuthActions';
import { useDispatch } from 'react-redux';

const SuccessNotification = ({success}) => {
    const dispatch = useDispatch();
    const [show , setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
            dispatch(clearSuccess());
    }, 3000)

    } , [show , dispatch])
    const customId = "";
  return (
    <div>
{
    show && (
        <div>
            {toast.success(success.msg , {
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

export default SuccessNotification
