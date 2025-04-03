import { TableHeader } from "../../api/search";
import TableWrapper from "../../components/Table/TableWrapper";
import CommonPage from "../CommonPage/CommonPage";

const MainPage = () => {
  return (
    <CommonPage>
      <TableWrapper
        tableTitle="즐겨찾기 리스트"
        tableHeader={TableHeader.default}
        tableCategory="bookmark_list"
      />
      <TableWrapper
        tableTitle="재고 리스트"
        tableHeader={TableHeader.default}
        tableCategory="stock_list"
      />
      <TableWrapper
        tableTitle="재고부족 리스트"
        tableHeader={TableHeader.default}
        tableCategory="stock_list"
      />
    </CommonPage>
  );
};

export default MainPage;
