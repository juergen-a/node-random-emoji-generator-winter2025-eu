import { argv } from 'node:process';
// Accessing emoji from library
import * as emoji from 'node-emoji';

/*
const emojiIcon = emoji.random();

console.log(emojiIcon.emoji);

console.log('argv', argv[2]);

console.log(emoji.get('smiley'));

console.log(`Sorry, emoji does not exist`);


const length = argv.length;

console.log(String(length));
*/

if (argv.length < 3) {
  console.log(emoji.random().emoji);
} else if (emoji.get(argv[2])) {
  console.log(emoji.get(argv[2]));
} else {
  console.log(`Sorry ${argv[2]} does not exist`);
}
