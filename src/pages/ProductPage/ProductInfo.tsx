import { useState } from "react";
import styled from "styled-components";
import SquareButton from "../../components/Button/SquareButton";

const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12rem;
  padding: 0 2rem;
  box-sizing: border-box;
`;

const ProductImg = styled.div`
  width: 80%;
  height: 100%;
  background-color: red;
  & > img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const ProductContent = styled.div`
  width: 100%;
  .btn_wrapper {
    display: flex;
    justify-content: right;
    column-gap: 1rem;
  }

  .table_wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 5rem;
    padding: 5rem 0;
    box-sizing: border-box;
    .table_row {
      display: flex;
      font-size: 1.6rem;
      .table_header {
        width: 10rem;
        font-weight: bold;
      }
      .table_item {
      }
    }
  }
`;

const ProductInfo = () => {
  const [productContent, setProductContent] = useState({
    id: 3,
    code: "w-003",
    name: "어쩌고 저쩌고 통가발 03",
    img: "https://firebasestorage.googleapis.com/v0/b/[STORAGE_BUCKET]/o/[ENCODED_FILE_NAME]?alt=media",
    quantity: 24,
    updateDate: "2024-05-03",
  });

  return (
    <ProductWrapper>
      <ProductImg>
        <img src="" alt="상품 이미지" />
      </ProductImg>
      <ProductContent>
        <div className="btn_wrapper">
          <SquareButton btnTxt="즐겨찾기" />
          <SquareButton
            btnTxt="상품삭제"
            btnColor="#F35C5C"
            btnTxtColor="white"
          />
        </div>
        <div className="table_wrapper">
          <div className="table_row">
            <div className="table_header">제품코드</div>
            <div className="table_item">{productContent.code}</div>
          </div>
          <div className="table_row">
            <div className="table_header">제품명</div>
            <div className="table_item">{productContent.name}</div>
          </div>
          <div className="table_row">
            <div className="table_header">보유수량</div>
            <div className="table_item">{productContent.quantity}</div>
          </div>
          <div className="table_row">
            <div className="table_header">등록일자</div>
            <div className="table_item">{productContent.updateDate}</div>
          </div>
        </div>
      </ProductContent>
    </ProductWrapper>
  );
};

export default ProductInfo;
