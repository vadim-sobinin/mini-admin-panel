import { render } from './render';
export const addUser = () => {
  const form = document.querySelector('form');

  const clearForm = () => {
    form.querySelector('#form-name').value = '';
    form.querySelector('#form-email').value = '';
    form.querySelector('#form-children').checked = false;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.querySelector('.btn-save').hasAttribute('id')) {
      const name = form.querySelector('#form-name').value;
      const email = form.querySelector('#form-email').value;
      const children = form.querySelector('#form-children').checked;

      const data = {
        name: name,
        email: email,
        children: children,
        permission: false,
      };

      userServices.addUser(data).then(() => {
        userServices
          .getUsers()
          .then((users) => render(users))
          .then(() => clearForm());
      });
    }
  });
};
