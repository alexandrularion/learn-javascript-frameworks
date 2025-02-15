import React from "react";
import styles from "./suggestion.module.css";
import { useParams } from "react-router";

const SuggestionPage = () => {
  const params = useParams();
  const [suggestion, setSuggestion] = React.useState(null);

  const getSuggestionByIdFromApi = async (suggestionId) => {
    try {
      const response = await fetch(
        `http://localhost:5174/api/suggestions/${suggestionId}`
      );
      const data = await response.json();
      setSuggestion(data); // Tip: The data is an object representing the suggestion
    } catch (e) {
      console.log(
        `[API-ERROR]: Error when fetching the suggestions count. Message: ${e.message}`
      );
    }
  };

  React.useEffect(() => {
    // Tip: The params.slug is the actual suggestion id from the URL
    getSuggestionByIdFromApi(params.slug);
  }, [params]);

  console.log(suggestion);

  return <main className={styles["container"]}>Suggestion page</main>;
};

export default SuggestionPage;
