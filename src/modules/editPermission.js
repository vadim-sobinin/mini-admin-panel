import { render } from './render';
export const editPermission = () => {
  const tableBody = document.querySelector('#table-body');

  tableBody.addEventListener('click', (e) => {
    if (e.target.closest('#form-permission')) {
      const id = e.target.closest('tr').getAttribute('id');
      const permission = e.target.checked;
      const data = {
        permission: permission,
      };

      userServices.editPermission(id, data).then(() => {
        userServices.getUsers().then((users) => setTimeout(render, 200, users));
      });
    }
  });
};
