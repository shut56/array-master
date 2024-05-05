const usernames = ['Ruslan', 'Pepe', 'Vitaly', 'Dina', [1, 2, 3]];

// console.log(usernames[0]);

const n = 2;

// console.log(usernames[n]);

const admins = JSON.parse(JSON.stringify(usernames));

// console.log(admins);

admins.push('Oksana');
admins[4].push(4);

// console.log('admins', admins);
// console.log('usernames', usernames);

const users1 = usernames.map((item, index) => {
  if (typeof item === 'string') {
    return {
      id: `${item.toLowerCase()}-${index}`,
      name: item,
    };
  }

  return item;
});

// console.log(users1);

const user = users1[0];

// console.log(user.name);

const a = '0';
const b = 0;
// console.log(a == b);
// console.log(a != b);
// console.log(a === b);
// console.log(a !== b);

const friends = usernames
  .filter((item) => {
    return typeof item === 'string';
  })
  .map((item, index) => {
    return {
      id: `${item.toLowerCase()}-${index}`,
      name: item,
    };
  });

console.log(friends);

const friendListAlpha = {
  'ruslan-0': friends[0],
  'pepe-1': friends[1],
  'vitaly-2': friends[2],
  'dina-3': friends[3],
};

// console.log('friendListAlpha', friendListAlpha);

const reducer = (acc, friend) => {
  acc[friend.id] = friend;
  return acc;
};

const friendListBeta = friends.reduce(reducer, {});

// console.log('friendListBeta', friendListBeta);

const friendListOmega = friends.reduce((acc, rec, index) => {
  // console.log('Previous string', acc);

  if (index !== 0) {
    return `${acc}, ${rec.name}`;
  }

  return `${acc}: ${rec.name}`;
}, 'My friends');

// console.log('friendListOmega', friendListOmega);

// console.log([1, 2, 3].reduce((acc, rec) => acc + rec, 0));

const separator = '@';

const strArray = friends.map(JSON.stringify).join(separator);

// console.log(strArray);

const friendsBlock = document.createElement('div');
const root = document.getElementById('root');

friendsBlock.id = 'friends-block';

root.append(friendsBlock);

const friendOrderedList = document.createElement('ol');
friendOrderedList.id = 'friend-list';

friendsBlock.append(friendOrderedList);

function renderFriendList(friends) {
  friendOrderedList.textContent = '';

  friends.forEach((friend) => {
    const friendElement = document.createElement('li');
    friendElement.textContent = friend.id;
    friendElement.className = 'friend';

    friendOrderedList.append(friendElement);
  });
}

renderFriendList(friends);

const addFriendButton = document.createElement('button');
addFriendButton.type = 'submit';
addFriendButton.textContent = 'Add new friend';

const friendForm = document.createElement('form');

friendsBlock.append(friendForm);

const friendNameInput = document.createElement('input');
friendNameInput.type = 'text';
friendNameInput.placeholder = 'Enter friend name...';

friendForm.append(friendNameInput);
friendForm.append(addFriendButton);

function onSubmitHandler(e) {
  e.preventDefault();

  const name = friendNameInput.value;

  // const friendElement = document.createElement('li');
  const someValue = `${name.toLowerCase()}-${friends.length}`;
  // friendElement.textContent = someValue;
  // friendElement.className = 'friend';

  friends.push({
    id: someValue,
    name,
  });

  // friendOrderedList.append(friendElement);

  friendNameInput.value = '';

  renderFriendList(friends);
}

friendForm.addEventListener('submit', onSubmitHandler);

const foundFriends = document.querySelectorAll('.friend');
const foundFriendsOld = document.getElementsByClassName('friend');

const updatedFriendList = Array.from(foundFriends, (item) => {
  return item.textContent;
});

console.log(updatedFriendList);
