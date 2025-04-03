import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchResults } from "../../api/data";
import styled from "styled-components";
import Title from "../Text/Title";
import Table from "./Table";

const CustomWrapper = styled.div`
  padding: 3rem 2rem;
  box-sizing: border-box;
`;

const SearchTable = ({ tableHeader }: { tableHeader: string[] }) => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter") as "code" | "name";
  const keyword = searchParams.get("keyword");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (filter && keyword) {
      const fetchData = async () => {
        const data = await getSearchResults({
          category: "stock_list",
          keyword,
          filter,
        });

        if (data) {
          setTableData(data);
        }
      };
      fetchData();
    }
  }, [filter, keyword]);

  return (
    <CustomWrapper>
      {tableData.length === 0 ? (
        <Title
          titleText={`${
            filter === "name" ? "제품명" : "제품코드"
          } '${keyword}' 에 대한 검색결과가 없습니다.`}
          textAlign="center"
        />
      ) : (
        <>
          <Title
            titleText={`'${keyword}' 에 대한 검색결과: 총 ${tableData.length}건`}
          />
          <Table tableHeader={tableHeader} tableContent={tableData} />
        </>
      )}
    </CustomWrapper>
  );
};

export default SearchTable;
