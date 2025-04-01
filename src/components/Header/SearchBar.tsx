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
  & > input {
    width: 100%;
    max-width: 50rem;
  }
`;

const SearchBar = () => {
  return (
    <SearchWrapper>
      <HomeBtn />
      <SearchInput />
      <SearchBtn />
    </SearchWrapper>
  );
};

export default SearchBar;
