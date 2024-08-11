import Layout from "../common/layout/layout";
import BoardFooter from "../components/board-footer/board-footer";
import BoardGrid from "../components/board-grid/board-grid";
import BoardHeader from "../components/board-header/board-header";

const BoardPage = () => {
  return (
    <Layout>
      <BoardHeader />
      <BoardGrid />
      <BoardFooter />
    </Layout>
  );
};

export default BoardPage;
