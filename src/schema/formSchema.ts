import * as yup from 'yup';

export const formSchema = yup.object({
  firstName: yup
    .string()
    .required('Required first name 😰')
    .min(1, 'Required at least one character')
    .max(80, 'Exceeded Enterable Characters'),
  lastName: yup
    .string()
    .required('Required last name 😰')
    .min(1, 'Required at least one character')
    .max(100, 'Exceeded Enterable Characters'),
  email: yup.string().required('Required email 😰').email(),
  phone: yup.number().required('Required phone number 😰'),
  title: yup.string().required('Required title 😰'),
  developer: yup.string().required('Required developer 😰'),
  file: yup.mixed(),
});
