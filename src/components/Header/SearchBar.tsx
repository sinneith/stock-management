import { useState } from "react";
import { SearchFilter } from "../../types/searchInterface.d";
import styled from "styled-components";
import HomeBtn from "./HomeBtn";
import SearchInput from "./SearchInput";
import SearchBtn from "./SearchBtn";

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 3rem;
  padding: 5rem 2rem;
  box-sizing: border-box;
`;

const filterList: SearchFilter[] = [
  { id: 1, value: "name", label: "제품명" },
  { id: 2, value: "code", label: "제품코드" },
];

const SearchBar = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [filter, setFilter] = useState<"name" | "code">("name");

  return (
    <SearchWrapper>
      <HomeBtn />
      <SearchInput
        keyword={keyword}
        setKeyword={setKeyword}
        filter={filter}
        setFilter={setFilter}
        filterList={filterList}
      />
      <SearchBtn keyword={keyword} filter={filter} />
    </SearchWrapper>
  );
};

export default SearchBar;
