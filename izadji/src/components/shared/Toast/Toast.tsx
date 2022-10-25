import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        success: {
          style: {
            border: '1px solid #64d34d',
          },
        },
        error: {
          style: {
            border: '1px solid red',
          },
        },
      }}
    />
  );
};

export default Toast;
