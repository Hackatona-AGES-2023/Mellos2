import { Routes, Route, BrowserRouter } from "react-router-dom";
import DailyForm from "../pages/DailyForm/DailyForm";
import InitialForm from "../pages/InitialForm/InitialForm";
import Home from "../pages/Home/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/initialForm" element={<InitialForm />} />
        <Route path="/dailyForm" element={<DailyForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;