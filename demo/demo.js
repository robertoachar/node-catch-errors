const fetch = require('node-fetch');
const catchErrors = require('../src');

async function load(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();
  console.log(user.name);
}

const wrappedLoad = catchErrors(load);

wrappedLoad('robertoachar');
