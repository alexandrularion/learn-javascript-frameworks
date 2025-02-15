import React from "react";
import ListCard from "./list-card";
import styles from "./list-suggestions.module.css";
import { Text } from "../../../common";

const ListSuggestions = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState([]);

  const getSuggestionsFromApi = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5174/api/suggestions");
      const data = await response.json();
      setSuggestions(data);
    } catch (e) {
      console.log(
        `[API-ERROR]: Error when fetching the suggestions. Message: ${e.message}`
      );
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    getSuggestionsFromApi();
  }, []);

  return (
    <div className={styles["container"]}>
      {suggestions && suggestions.length ? (
        suggestions.map((suggestion) => (
          <ListCard
            key={suggestion.id}
            id={suggestion.id}
            upVotes={suggestion.upVotes}
            name={suggestion.name}
            description={suggestion.description}
            categoryName={suggestion.category.name}
            totalComments={suggestion.totalComments}
          />
        ))
      ) : isLoading ? (
        <Text size="lg">Loading...</Text>
      ) : (
        <Text size="lg">No suggestions found</Text>
      )}
    </div>
  );
};

export default ListSuggestions;
