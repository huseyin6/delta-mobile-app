// import React, {useState} from 'react';

let Users = () => {
  let users = [];

  let user1 = new Object();
  user1.role = 'admin';
  user1.deparment = 'genel mudurluk';
  user1.name = 'system';
  user1.surname = 'administor';
  user1.mail = 'admin@delta.smart';
  user1.password = 'eeee';
  // user1.password = 'E4c-p7*K';
  user1.is_active = 1;

  let user2 = new Object();
  user2.role = 'manager';
  user2.deparment = 'genel mudurluk';
  user2.name = 'Tolgahan';
  user2.surname = 'Oysal';
  user2.mail = 'tolgahan.oysal@deltasmart.tech';
  user2.password = null;
  user2.is_active = 0;

  users.push(user1);
  users.push(user2);

  return users;
};

/*
function activateAccount(mail, password) {
  let users = Users();
  for (let index = 0; index < users.length; index++) {
    const element = users[index];

    if(mail==element.mail && password==element.password) {
      const [users[index].is_active, setActive] = useState(1);
      return 1;
    }
  }
  return 0;
}
*/
export default Users;
