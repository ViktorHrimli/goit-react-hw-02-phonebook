import { Box } from 'commonStyle/Common.styled';
import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormContact, FormLabel, Input, FormButton, Eror } from './Form.styled';
const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().min(5).max(30).required(),
});
const initialValue = { name: '', number: '' };

export const Formes = ({ onSubmit }) => {
  const hendleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={hendleSubmit}
      validationSchema={validationSchema}
    >
      <FormContact>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <FormLabel>
            Name
            <Input type="text" name="name" />
            <ErrorMessage name="name" render={msg => <Eror>{msg}</Eror>} />
          </FormLabel>

          <FormLabel>
            Telephone
            <Input type="tel" name="number" />
            <ErrorMessage name="number" render={msg => <Eror>{msg}</Eror>} />
          </FormLabel>

          <FormButton type="submit">Add Contact</FormButton>
        </Box>
      </FormContact>
    </Formik>
  );
};

// export class Form extends Component {
//   state = { name: '', number: '' };
//   handleSibmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   inputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <FormContact action="#" onSubmit={this.handleSibmit}>
//         <Box
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Formik>
//             <FormLabel>
//               Name
//               <FormInput
//                 type="text"
//                 name="name"
//                 value={name}
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//                 onChange={this.inputChange}
//               />
//             </FormLabel>

//             <FormLabel>
//               Telephone
//               <FormInput
//                 type="tel"
//                 name="number"
//                 value={number}
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 onChange={this.inputChange}
//               />
//             </FormLabel>

//             <FormButton type="submit">Add Contact</FormButton>
//           </Formik>
//         </Box>
//       </FormContact>
//     );
//   }
// }
