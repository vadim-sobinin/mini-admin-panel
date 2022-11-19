import { render } from './render';
export const searchUsers = () => {
  const searchInput = document.querySelector('#search-input');

  searchInput.addEventListener('input', () => {
    userServices.searchUsers(searchInput.value).then((users) => {
      render(users);
    });
  });
};
