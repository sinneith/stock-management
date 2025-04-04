import styled from "styled-components";

const CustomBtn = styled.div<{ btnColor?: string; btnTxtColor: string }>`
  width: max-content;
  padding: 1rem 2rem;
  box-sizing: border-box;
  font-size: 1.4rem;
  cursor: pointer;
  background-color: ${(props) => props.btnColor};
  border: 0.1rem solid
    ${(props) => (props.btnColor ? props.btnColor : "#535353")};
  color: ${(props) => props.btnTxtColor};
`;

const SquareButton = ({
  btnTxt,
  btnColor,
  btnTxtColor = "#000",
  btnAction,
}: {
  btnTxt: string;
  btnColor?: string;
  btnTxtColor?: string;
  btnAction?: () => void;
}) => {
  return (
    <CustomBtn
      btnColor={btnColor}
      btnTxtColor={btnTxtColor}
      onClick={btnAction}
    >
      {btnTxt}
    </CustomBtn>
  );
};

export default SquareButton;
