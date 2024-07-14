const WithLogger = (Component, componentName) => {
  return (props) => {
    console.log(`${componentName}:`, props);
    return <Component {...props} />;
  };
};

export default WithLogger;
