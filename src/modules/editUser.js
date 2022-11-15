import { render } from './render';
export const editUser = () => {
  const tableBody = document.querySelector('#table-body');
  const form = document.querySelector('form');
  const formName = form.querySelector('#form-name');
  const formEmail = form.querySelector('#form-email');
  const formChildren = form.querySelector('#form-children');

  const clearForm = () => {
    formName.value = '';
    formEmail.value = '';
    formChildren.checked = false;
    const saveBtn = form.querySelector('.btn-save');
    saveBtn.removeAttribute('id');
    saveBtn.classList.replace('btn-warning', 'btn-success');
    saveBtn.textContent = 'Save';
  };

  tableBody.addEventListener('click', (e) => {
    if (e.target.closest('#edit-btn')) {
      const id = e.target.closest('tr').getAttribute('id');
      const userData = e.target.closest('tr').children;

      formName.value = userData[1].textContent;
      formEmail.value = userData[2].textContent;
      formChildren.checked = userData[3].textContent == 'has';

      const saveBtn = form.querySelector('.btn-save');
      saveBtn.setAttribute('id', `save${id}`);
      saveBtn.classList.replace('btn-success', 'btn-warning');
      saveBtn.textContent = 'Save changes';

      saveBtn.addEventListener('click', (e) => {
        if (form.querySelector('.btn-save').hasAttribute('id')) {
          const name = form.querySelector('#form-name').value;
          const email = form.querySelector('#form-email').value;
          const children = form.querySelector('#form-children').checked;
          const permission = userData[4].querySelector('#form-permission').checked;

          const data = {
            name: name,
            email: email,
            children: children,
            permission: permission,
          };

          userServices.editUser(id, data).then(() => {
            userServices
              .getUsers()
              .then((users) => render(users))
              .then(() => clearForm());
          });
        }
      });
    }
  });
};
