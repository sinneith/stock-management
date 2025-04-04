import { useNavigate } from "react-router-dom";
import { searchKeyword } from "../../api/search";
import ButtonWithImg from "../Button/ButtonWithImg";

const SearchBtn = ({
  filter,
  keyword,
}: {
  filter: string;
  keyword: string;
}) => {
  const navigate = useNavigate();
  return (
    <ButtonWithImg
      imgUrl="/src/assets/images/search.png"
      imgAlt="검색"
      btnAction={() => searchKeyword({ filter, keyword, navigate })}
    />
  );
};

export default SearchBtn;
