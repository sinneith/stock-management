import { NavigateFunction } from "react-router-dom";

export const searchKeyword = ({
  filter,
  keyword,
  navigate,
}: {
  filter: string;
  keyword: string;
  navigate: NavigateFunction;
}) => {
  if (keyword === "") {
    alert("검색어를 입력해주세요");
  } else {
    navigate(`/search?filter=${filter}&keyword=${keyword}`);
  }
};
