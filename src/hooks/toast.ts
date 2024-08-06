import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const options: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export const useToast = () => {
  const toastSuccess = (message: string) => toast.success(message, options);

  const toastError = (message: string) => toast.error(message, options);

  const toastInfo = (message: string) => toast.info(message, options);

  const toastWarning = (message: string) => toast.warning(message, options);

  return { toastSuccess, toastError, toastInfo, toastWarning };
};
