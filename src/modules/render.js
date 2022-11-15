export const render = (users) => {
  const tableBody = document.querySelector('#table-body');
  tableBody.innerHTML = '';
  users.forEach((user) => {
    const userNumber = tableBody.childElementCount + 1;
    const userTable = document.createElement('tr');
    userTable.setAttribute('id', user.id);
    userTable.innerHTML = `
      <th scope="row">${userNumber}</th>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.children ? 'has' : 'has not'}</td>
      <td>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="form-permission"
          />
        </div>
      </td>
      <td>
        <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-warning" id="edit-btn">
            <i class="bi-pencil-square"></i>
          </button>
          <button type="button" class="btn btn-danger" id="remove-btn">
            <i class="bi-person-x"></i>
          </button>
        </div>
      </td>`;
    userTable.querySelector('#form-permission').checked = user.permission;
    tableBody.append(userTable);
  });
};
