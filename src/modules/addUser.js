import { render } from './render';
export const addUser = () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
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
      userServices.getUsers().then((users) => render(users));
    });
  });
};
