import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import SuggestionsPage from "./pages/suggestions.page";
import SuggestionPage from "./pages/suggestion.page";
import EditSuggestionPage from "./pages/edit-suggestion.page";
import AddSuggestionPage from "./pages/add-suggestion.page";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<SuggestionsPage />} />
        <Route path="s/:slug" element={<SuggestionPage />} />
        <Route path="s/:slug/edit" element={<EditSuggestionPage />} />
        <Route path="s/add" element={<AddSuggestionPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
