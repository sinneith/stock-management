import TableWrapper from "../../components/Table/TableWrapper";
import CommonPage from "../CommonPage/CommonPage";

const MainPage = () => {
  const table_1_header = ["제품코드", "제품명", "수량"];

  return (
    <CommonPage>
      <TableWrapper
        tableTitle="즐겨찾기 리스트"
        tableHeader={table_1_header}
        tableCategory="bookmark_list"
      />
      <TableWrapper
        tableTitle="재고 리스트"
        tableHeader={table_1_header}
        tableCategory="stock_list"
      />
      <TableWrapper
        tableTitle="재고부족 리스트"
        tableHeader={table_1_header}
        tableCategory="stock_list"
      />
    </CommonPage>
  );
};

export default MainPage;
