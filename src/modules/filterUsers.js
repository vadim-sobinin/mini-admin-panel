import { render } from './render';
export const filterUsers = () => {
  const btnIsChildren = document.querySelector('#btn-isChildren');
  const btnIsPermissions = document.querySelector('#btn-isPermissions');
  const btnIsAll = document.querySelector('#btn-isAll');

  btnIsChildren.addEventListener('click', () => {
    const filterOpt = '?children=true';

    userServices.filterUsers(filterOpt).then((users) => render(users));
  });

  btnIsPermissions.addEventListener('click', () => {
    const filterOpt = '?permission=true';

    userServices.filterUsers(filterOpt).then((users) => render(users));
  });

  btnIsAll.addEventListener('click', () => userServices.getUsers().then((users) => render(users)));
};
