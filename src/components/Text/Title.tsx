import styled from "styled-components";

const CustomTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 3rem;
  box-sizing: border-box;
`;

const Title = ({ titleText }: { titleText: string }) => {
  return <CustomTitle>{titleText}</CustomTitle>;
};

export default Title;
