import { useEffect, useState } from "react";
import { getData, getStockShortage } from "../../api/data";
import styled from "styled-components";
import Title from "../Text/Title";
import Table from "./Table";

const CustomWrapper = styled.div`
  padding: 3rem 2rem;
  box-sizing: border-box;
`;

const TableWrapper = ({
  tableTitle,
  tableCategory,
  tableHeader,
}: {
  tableHeader: string[];
  tableTitle?: string;
  tableCategory: string;
}) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (tableTitle === "재고부족 리스트") {
      const fetchData = async () => {
        const data = await getStockShortage(tableCategory);
        if (data) {
          setTableData(data);
        }
      };
      fetchData();
    } else {
      const fetchData = async () => {
        const data = await getData(tableCategory);
        if (data) {
          setTableData(data);
        }
      };
      fetchData();
    }
  }, [tableCategory]);

  return (
    <CustomWrapper>
      {tableTitle && <Title titleText={tableTitle} />}
      <Table tableHeader={tableHeader} tableContent={tableData} />
    </CustomWrapper>
  );
};

export default TableWrapper;
