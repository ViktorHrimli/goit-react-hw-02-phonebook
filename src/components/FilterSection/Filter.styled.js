import styled from 'styled-components';
import { theme } from 'commonStyle/Thema';

export const ListInput = styled.input`
  width: ${`${theme.space[8]}px`};
  padding: ${`${theme.space[2]}px`};
  outline: none;
  border: ${theme.borders.normal};
  border-radius: ${theme.radii.md};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.s};
  margin-bottom: ${`${theme.space[3]}px`};
  transition: border 250ms, box-shadow 250ms;

  :hover,
  :focus {
    border: ${theme.borders.normal} ${theme.colors.accent};
    box-shadow: 2px 2px 3px #00bfff;
  }
`;
