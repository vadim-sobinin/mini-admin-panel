import { render } from './render';
import { debounce } from './helpers';
export const searchUsers = () => {
  const searchInput = document.querySelector('#search-input');

  const debounceSearch = debounce(() => {
    userServices.searchUsers(searchInput.value).then((users) => {
      render(users);
    });
  }, 500);

  searchInput.addEventListener('input', debounceSearch);
};
