import JustValidate from 'just-validate';
import Inputmask from 'inputmask';

export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('.form__input--tel');

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  if (telSelector) {
    const inputMask = new Inputmask('+7 (999) 99-99-99', { showMaskOnFocus: false, showMaskOnHover: false });
    inputMask.mask(telSelector);

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 9;
          },
          errorMessage: item.telError,
        });
      }
    }
  }

  const validation = new JustValidate(selector, {
    errorLabelStyle: {
      color: '#ee3a26',
    },
    errorLabelCssClass: 'form__error',
  });

  for (let item of rules) {
    validation.addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess((e) => {
    let formData = new FormData(e.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            afterSend();
          }
        }
      }
    };

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    e.target.reset();
  });
};
