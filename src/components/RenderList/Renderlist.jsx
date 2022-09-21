import React from 'react';
import { ItemList, ItemListButton, ItemListParagr } from './Renderlist.styled';
export const Renderlist = ({ contact, onRemove }) => {
  return (
    contact.length > 0 &&
    contact.map(item => {
      return (
        <ItemList key={item.id}>
          <ItemListParagr>
            {item.name} {item.number}
          </ItemListParagr>
          <ItemListButton type="button" name={item.id} onClick={onRemove}>
            Delete
          </ItemListButton>
        </ItemList>
      );
    })
  );
};
