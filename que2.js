let notifications = [
{message: ‘Lorem’, read: true},
{message: ‘Ipsum’, read: true},
{message: ‘Dolor’, read: true},
{message: ‘Sit’, read: false},
{message: ‘Amet’, read: true}
]
let allRead = ! new Set(Array.from(notifications, x => x.read)).has(false);

console.log(allRead)
