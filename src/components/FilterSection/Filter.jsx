import React from 'react';
import { ListInput } from './Filter.styled';

export const Filter = ({ value, onFilter }) => {
  return <ListInput type="text" value={value} onChange={onFilter} />;
};
