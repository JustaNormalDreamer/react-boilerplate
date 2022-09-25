import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "@/redux/store";
import "@/styles/style.css";

const Home = lazy(() => import("@/pages/index"));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback="Loading...">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
