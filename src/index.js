import { UserServices } from './modules/userServices';
import { render } from './modules/render';
import { addUser } from './modules/addUser';

window.userServices = new UserServices();

userServices.getUsers().then((data) => {
  render(data);
});

addUser();
