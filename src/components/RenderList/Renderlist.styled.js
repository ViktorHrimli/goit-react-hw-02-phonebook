import styled from 'styled-components';
import { theme } from 'commonStyle/Thema';

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${`${theme.space[3]}px`};
  gap: ${`${theme.space[3]}`};
`;

export const ItemList = styled.li`
  width: 100%;
`;

export const ItemListParagr = styled.p`
  font-family: ${theme.fonts.monospace};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
`;

export const ItemListButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.monospace};
  font-size: ${theme.fontSizes.m};
  padding: ${`${theme.space[2]}px`};
  outline: none;
  border: ${theme.borders.normal};
  border-radius: ${theme.radii.md};
  color: ${theme.colors.white};
  background-color: ${theme.colors.accent};
  transition: border 250ms, box-shadow 250ms, scale 250ms;

  :hover,
  :focus {
    cursor: pointer;
    border: ${theme.borders.normal} ${theme.colors.accent};
    box-shadow: 2px 2px 3px #00bfff;
    scale: 1.1;
  }
`;
