// General
import styled from "styled-components";

//  Types

type Flex = {
  justifyContent: string;
  alignItems: string;
  flexFlow?: boolean;
};

type Container = {
  maxwidth: string;
  padding?: string;
};

// =================================== FLEX ===================================

export const Flex = styled.div<Flex>`
  height: 100%;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-flow: ${({ flexFlow }) => flexFlow && "column nowrap"};
  position: relative;
`;

// =================================== CONTAINER ===================================

export const Container = styled.section<Container>`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: ${({ maxwidth }) => maxwidth};
  margin: 0 auto;
  padding: ${({ padding }) => (padding ? `${padding} 4rem` : "0 4rem")};

  @media screen and (max-width: 500px) {
    padding: ${({ padding }) => (padding ? `${padding} 2rem` : "0 2rem")};
  }
`;
