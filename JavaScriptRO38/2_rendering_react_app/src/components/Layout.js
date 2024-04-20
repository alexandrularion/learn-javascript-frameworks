const Layout = ({ children }) => {
  return (
    <div>
      <nav>This is my navigation</nav>
      {children}
      <footer>This is my footer</footer>
    </div>
  );
};

export default Layout;
