import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-bottom: 0.1rem solid grey;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 1.8rem;
  &:focus {
    outline: none;
  }
`;

const SearchInput = () => {
  const [keyword, setKeyword] = useState("");

  const handleChangeKeyword = (inputWord: string) => setKeyword(inputWord);

  return (
    <Input
      value={keyword}
      onChange={(e) => handleChangeKeyword(e.target.value)}
    />
  );
};

export default SearchInput;
