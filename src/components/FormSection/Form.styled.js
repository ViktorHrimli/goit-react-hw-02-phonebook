import styled from 'styled-components';
import { theme } from 'commonStyle/Thema';
import { Field, Form } from 'formik';

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-family: ${theme.fonts.monospace};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.normal};
  margin-top: ${`${theme.space[4]}px`};
`;

export const Input = styled(Field)`
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

export const FormButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.monospace};
  font-size: ${theme.fontSizes.m};
  padding: ${`${theme.space[3]}px`};
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

export const Eror = styled.p`
  font-family: ${theme.fonts.monospace};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.muted};
`;
