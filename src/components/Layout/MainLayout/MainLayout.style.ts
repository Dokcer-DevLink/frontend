import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-between;
`;

interface SideSection {
  left?: string;
  right?: string;
}

export const SideSection = styled.section<SideSection>`
  position: fixed;
  top: 0;
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  height: 100vh;
  width: 25vw;

  display: none;

  border-right: 1px solid ${(props) => props.theme.schemes.light.surfaceVariant};
  padding: 20px;

  background-color: ${(props) => props.theme.schemes.light.background};

  @media (min-width: 801px) {
    display: block;
  }
`;

export const Logo = styled.img`
  width: ${(props) => props.width};
  cursor: pointer;
`;

export const SideNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 40px;
`;

export const ButtonIcon = styled.img``;

export const ContentSection = styled.section`
  width: 100%;
  height: 100vh;

  @media (min-width: 801px) {
    margin: 0 25vw;
  }

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background-color: ${(props) => props.theme.schemes.light.background};
`;
export const ContentSectionInner = styled.div`
  height: 100%;
`;

export const Header = styled.header`
  width: 100%;

  display: none;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid
    ${(props) => props.theme.schemes.light.surfaceVariant};
  padding: 10px;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const ButtomNavigation = styled.nav`
  width: 100%;

  display: none;
  justify-content: space-between;

  border-top: 1px solid ${(props) => props.theme.schemes.light.surfaceVariant};
  padding: 10px;
  @media (max-width: 800px) {
    display: flex;
  }
`;
