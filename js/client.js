const socket = io('http://localhost:3030');

const form = document.getElementById('send-container');

const messageInput = document.getElementById('messageInp');

const messageContainer = document.querySelector(".container");

const name = prompt("Enter your name to display ");
