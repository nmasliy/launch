import { validateForms } from '../functions/validate-forms';

const rules = [
  {
    ruleSelector: '.form__input--name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!',
      },
      {
        rule: 'customRegexp',
        value: /^([^0-9]*)$/,
        errorMessage: 'В имени не должно быть цифр!',
      },
    ],
  },
  {
    ruleSelector: '.form__input--tel',
    tel: true,
    telError: 'Введите корректный телефон!',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!',
      },
    ],
  },
  {
    ruleSelector: '.form__input--email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните Email!',
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email!',
      },
    ],
  },
];

const afterSend = () => {};

validateForms('.consult__form', rules, afterSend);
