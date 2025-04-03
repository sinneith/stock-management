import { TableHeader } from "../../api/search";
import CommonPage from "../CommonPage/CommonPage";
import SearchTable from "../../components/Table/SearchTable";

const SearchPage = () => {
  return (
    <CommonPage>
      <SearchTable tableHeader={TableHeader.default} />
    </CommonPage>
  );
};

export default SearchPage;
