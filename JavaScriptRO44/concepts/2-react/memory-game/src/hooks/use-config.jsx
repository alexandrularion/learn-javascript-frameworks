import React from "react";

const useConfig = () => {
  const [config, setConfig] = React.useState({
    theme: "",
    grid: "",
  });

  React.useEffect(() => {
    const sessionStorageConfig = sessionStorage.getItem("memory.config");
    const parsedConfig = JSON.parse(sessionStorageConfig);

    // NOTE: Set the config object which contains grid and theme
    setConfig(parsedConfig);
  }, []);

  return config;
};

export default useConfig;
