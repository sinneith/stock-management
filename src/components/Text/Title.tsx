import styled from "styled-components";

const CustomTitle = styled.div<{ textAlign: "left" | "center" | "right" }>`
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 3rem;
  box-sizing: border-box;
  text-align: ${(props) => props.textAlign};
`;

const Title = ({
  titleText,
  textAlign = "left",
}: {
  titleText: string;
  textAlign?: "left" | "center" | "right";
}) => {
  return <CustomTitle textAlign={textAlign}>{titleText}</CustomTitle>;
};

export default Title;
