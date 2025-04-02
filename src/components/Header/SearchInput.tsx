import { SearchInputProps } from "../../types/searchInterface.d";
import styled from "styled-components";

const InputWrapper = styled.div`
  border-bottom: 0.1rem solid grey;
  width: 100%;
  max-width: 50rem;
`;

const Select = styled.select`
  border: none;
  font-size: 1.6rem;
  padding-right: 1rem;
  box-sizing: border-box;
`;

const Input = styled.input`
  border: none;
  padding: 1rem 2rem;
  box-sizing: border-box;
  font-size: 1.8rem;
`;

const SearchInput = ({
  keyword,
  setKeyword,
  filter,
  setFilter,
  filterList,
}: SearchInputProps) => {
  const handleChangeKeyword = (inputWord: string) => setKeyword(inputWord);
  const handleChangeFilter = (selectedFilter: string) =>
    setFilter(selectedFilter as "name" | "code");

  return (
    <InputWrapper>
      <Select
        value={filter}
        onChange={(e) => handleChangeFilter(e.target.value)}
      >
        {filterList.map((item) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
      <Input
        value={keyword}
        onChange={(e) => handleChangeKeyword(e.target.value)}
      />
    </InputWrapper>
  );
};

export default SearchInput;
