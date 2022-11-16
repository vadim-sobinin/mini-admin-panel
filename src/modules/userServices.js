export class UserServices {
  getUsers() {
    return fetch('http://localhost:4545/users').then((res) => res.json());
  }

  addUser(data) {
    return fetch('http://localhost:4545/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then((res) => res.json);
  }
  removeUser(id) {
    return fetch(`http://localhost:4545/users/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json);
  }

  editUser(id, data) {
    return fetch(`http://localhost:4545/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then((res) => res.json);
  }

  editPermission(id, data) {
    return fetch(`http://localhost:4545/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then((res) => res.json);
  }
}
