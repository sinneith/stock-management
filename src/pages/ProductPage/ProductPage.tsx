import { useParams } from "react-router-dom";
import Title from "../../components/Text/Title";
import CommonPage from "../CommonPage/CommonPage";
import ProductInfo from "./ProductInfo";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <CommonPage>
      <Title titleText="제품 정보" titlePadding="0 2rem 3rem" />
      <ProductInfo />
    </CommonPage>
  );
};

export default ProductPage;
