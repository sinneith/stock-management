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
  navigate(`/search?filter=${filter}&keyword=${keyword}`);
};
