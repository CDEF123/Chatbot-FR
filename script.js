// app.js

let userNumber = null;
let friends = [];
let messages = [];

// Elements
const userSelection = document.getElementById('userSelection');
const userNumberInput = document.getElementById('userNumber');
const submitNumberBtn = document.getElementById('submitNumber');
const addFriendBtn = document.getElementById('addFriendBtn');
const deleteFriendBtn = document.getElementById('deleteFriendBtn');
const friendList = document.getElementById('friends');
const chatWindow = document.getElementById('chatWindow');
const chatInput = document.getElementById('chatInput');
const sendMessageBtn = document.getElementById('sendMessage');
const notification = document.getElementById('notification');

// Show the user selection popup
submitNumberBtn.addEventListener('click', () => {
  const number = userNumberInput.value.trim();
  if (number) {
    userNumber = number;
    userSelection.style.display = 'none';
    alert(`Your user number is ${userNumber}`);
    renderFriends();
  } else {
    alert('Please enter a valid number');
  }
});

// Add friend functionality
addFriendBtn.addEventListener('click', () => {
  const friendNumber = prompt("Enter friend number:");
  if (friendNumber && !friends.includes(friendNumber)) {
    friends.push(friendNumber);
    renderFriends();
  } else {
    alert('Friend already added or invalid number');
  }
});

// Delete friend functionality
deleteFriendBtn.addEventListener('click', () => {
  const friendNumber = prompt("Enter friend number to delete:");
  friends = friends.filter(friend => friend !== friendNumber);
  renderFriends();
});

// Render friend list
function renderFriends() {
  friendList.innerHTML = '';
  friends.forEach(friend => {
    const li = document.createElement('li');
    li.textContent = `Friend: ${friend}`;
    friendList.appendChild(li);
  });
}

// Send message functionality
sendMessageBtn.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    messages.push({ type: 'sent', text: message });
    renderMessages();
    chatInput.value = '';
    showNotification();
  }
});

// Render messages in the chat window
function renderMessages() {
  const messagesContainer = document.getElementById('messages');
  messagesContainer.innerHTML = '';
  messages.forEach(msg => {
    const div = document.createElement('div');
    div.classList.add(msg.type);
    div.textContent = msg.text;
    messagesContainer.appendChild(div);
  });
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Show new message notification
function showNotification() {
  notification.classList.add('visible');
  setTimeout(() => {
    notification.classList.remove('visible');
  }, 3000);
}

