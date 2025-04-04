import { ReactNode } from "react";
import styled from "styled-components";
import SearchBar from "../../components/Header/SearchBar";

const PageWrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
`;

interface CommonPageProps {
  children?: ReactNode;
}

const CommonPage = ({ children }: CommonPageProps) => {
  return (
    <PageWrapper>
      <SearchBar />
      {children}
    </PageWrapper>
  );
};

export default CommonPage;
