import { render } from './render';
export const removeUser = () => {
  const tableBody = document.querySelector('#table-body');

  tableBody.addEventListener('click', (e) => {
    if (e.target.closest('#remove-btn')) {
      const id = e.target.closest('tr').getAttribute('id');

      userServices.removeUser(id).then(() => {
        userServices.getUsers().then((users) => render(users));
      });
    }
  });
};
