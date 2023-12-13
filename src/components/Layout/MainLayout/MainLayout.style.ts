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
  position: relative;

  width: 100vw;

  @media (min-width: 801px) {
    width: 50vw;
    margin: 0 25vw;
  }

  background-color: ${(props) => props.theme.schemes.light.background};
`;

export const ContentSectionInner = styled.div`
  padding: 100px 20px 150px;
  display: flex;
  flex-direction: column;
  gap: 70px;

  @media (min-width: 801px) {
    padding: 20px;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 5;

  width: 100%;

  display: none;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid
    ${(props) => props.theme.schemes.light.surfaceVariant};
  padding: 10px;

  background-color: ${(props) => props.theme.schemes.light.background};

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const ButtomNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 5;

  width: 100%;

  display: none;
  justify-content: space-between;

  background-color: ${(props) => props.theme.schemes.light.background};

  border-top: 1px solid ${(props) => props.theme.schemes.light.surfaceVariant};
  padding: 10px;
  @media (max-width: 800px) {
    display: flex;
  }
`;
