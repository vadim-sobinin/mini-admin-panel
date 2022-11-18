import { render } from './render';
export const sortUsers = () => {
  const sortIsChildren = document.querySelector('#sort-is-children');
  let isSort = true;
  let sortOpt = '';
  sortIsChildren.style.cursor = 'pointer';

  sortIsChildren.addEventListener('click', () => {
    isSort ? (sortOpt = '?_sort=children&_order=asc') : (sortOpt = '?_sort=children&_order=desc');
    userServices.sortUsers(sortOpt).then((users) => render(users));
    isSort = !isSort;
  });
};
