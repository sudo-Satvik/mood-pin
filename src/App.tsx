import AppRoutes from "./routes/Routes";
import { Flip, ToastContainer } from "react-toastify";
import { SpeedInsights } from "./components/common/SpeedInsights";

function App() {
  return (
    <>
      <AppRoutes />
      <SpeedInsights />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </>
  );
}

export default App;
