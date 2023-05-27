import { Routes, Route, BrowserRouter } from "react-router-dom";
import DailyForm from "../pages/DailyForm/DailyForm";
import InitialForm from "../pages/InitialForm/InitialForm";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialForm />} />
        <Route path="/dailyForm" element={<DailyForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;