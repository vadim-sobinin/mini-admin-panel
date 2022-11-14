import { UserServices } from './modules/userServices';
import { render } from './modules/render';
import { addUser } from './modules/addUser';
import { removeUser } from './modules/removeUser';

window.userServices = new UserServices();

userServices.getUsers().then((data) => {
  render(data);
});

addUser();
removeUser();
