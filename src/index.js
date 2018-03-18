const { subscribe } = require('./aws/sns');

// e.g. 16178904432
const PHONE_NUMBER = '<number_here>';

async function main() {
  const res = await subscribe(PHONE_NUMBER);
  console.log('Complete!', JSON.stringify(res));
}

main();
