// TYPES OF LOOPS
// for loop
// for...in
// for...of
// while
// do...while

const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
  { username: "user4", password: "password4" },
  { username: "user5", password: "password5" },
];

// break and continue

for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log("This is item " + i);
}
