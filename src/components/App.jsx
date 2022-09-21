import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { ThemeProvider } from 'styled-components';
import { theme } from 'commonStyle/Thema';
import { Box } from 'commonStyle/Common.styled';
import { nanoid } from 'nanoid';
import { Formes } from './FormSection/FormContact';
import { Filter } from './FilterSection/Filter';
import { Renderlist } from './RenderList/Renderlist';
import { ContactList } from './RenderList/Renderlist.styled';

export class Phonebook extends Component {
  state = {
    contact: [],
    filter: '',
  };

  hendleSubmit = ({ name, number }) => {
    const { contact } = this.state;
    const item = {
      id: nanoid(),
      name: name,
      number: number,
    };
    if (!contact.map(item => item.name).includes(name)) {
      this.setState(({ contact }) => ({
        contact: [item, ...contact],
      }));
    } else {
      Notiflix.Notify.warning(`${name} is already is contacts`);
    }
  };
  removeBtn = e => {
    const { contact } = this.state;
    this.setState({
      contact: contact.filter(item => item.id !== e.currentTarget.name),
    });
  };
  renderFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  renderContact = () => {
    const { contact, filter } = this.state;
    return contact.filter(item => item.name.toLowerCase().includes(filter));
  };

  render() {
    const { filter } = this.state;
    const contacts = this.renderContact();
    return (
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding={`${theme.space[8]}px`}
          margin="auto"
          width={`${theme.space[8] * 2}px`}
          fontFamily={theme.fonts.monospace}
        >
          <h1>Phonebook</h1>
          <Formes onSubmit={this.hendleSubmit} />
          <h2>Contacts</h2>
          <Filter value={filter} onFilter={this.renderFilter} />
          <ContactList>
            <Renderlist onRemove={this.removeBtn} contact={contacts} />
          </ContactList>
        </Box>
      </ThemeProvider>
    );
  }
}
