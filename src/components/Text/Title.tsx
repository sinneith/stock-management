import styled from "styled-components";

const CustomTitle = styled.div<{
  textAlign: "left" | "center" | "right";
  titlePadding: string;
}>`
  font-size: 2rem;
  font-weight: bold;
  padding: ${(props) => props.titlePadding};
  box-sizing: border-box;
  text-align: ${(props) => props.textAlign};
`;

const Title = ({
  titleText,
  textAlign = "left",
  titlePadding = "0 0 3rem 0",
}: {
  titleText: string;
  textAlign?: "left" | "center" | "right";
  titlePadding?: string;
}) => {
  return (
    <CustomTitle textAlign={textAlign} titlePadding={titlePadding}>
      {titleText}
    </CustomTitle>
  );
};

export default Title;
