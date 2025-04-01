import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = styled(Link)<{ imgWidth: number }>`
  width: ${(props) => props.imgWidth}rem;
  & > img {
    width: 100%;
  }
`;

const Button = styled.div<{ imgWidth: number }>`
  width: ${(props) => props.imgWidth}rem;
`;

const ButtonWithImg = ({
  imgUrl,
  location,
  imgAlt,
  imgWidth = 3,
}: {
  imgUrl: string;
  location?: string;
  imgAlt: string;
  imgWidth?: number;
}) => {
  return (
    <>
      {location ? (
        <LinkButton to={location} imgWidth={imgWidth}>
          <img src={imgUrl} alt={imgAlt} />
        </LinkButton>
      ) : (
        <Button imgWidth={imgWidth}>
          <img src={imgUrl} alt={imgAlt} />
        </Button>
      )}
    </>
  );
};

export default ButtonWithImg;
