import { Routes, Route } from "react-router";
import HomePage from "./pages/home.page";
import AboutPage from "./pages/about.page";
import JobsPage from "./pages/jobs.page";
import JobPage from "./pages/job.page";
import JobApplyPage from "./pages/job-apply.page";

function App() {
  return (
    <Routes>
      <Route index={true} element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="jobs">
        <Route index={true} element={<JobsPage />} />
        <Route path=":jobId" element={<JobPage />} />
        <Route path=":jobId/apply" element={<JobApplyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
