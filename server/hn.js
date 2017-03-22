// npm dependencies
const broadcast = require('broadcast');
const LRU = require( 'lru-cache' );

// local dependencies
const db = require( './db.js' );

// caches and stories
const MAX_AGE = 1000 * 30;
const items = LRU(100);
const users = LRU(100);
const stories = [
  'top',
  'new',
  'show',
  'ask',
  'job'
];

// create a method that loads
// a generic item in cache and resolves
const get = (type, list) =>
  id => list.has(id) ?
    list.get(id) :
    (list.set(id, new Promise(resolve => {
      db.child(`/${type}/${id}`)
        .once('value', snap => resolve(snap.val()));
    }), MAX_AGE),
    list.get(id));

// grab stories through `.on(${type}stories)` updates
stories.forEach(type => {
  const key = `${type}stories`;
  db.child(key)
    .on('value', snap => broadcast.that(key, snap.val()));
});

// expose mostly Promises based API
module.exports = {
  stories,
  item: get('item', items),
  user: get('user', users),
  story: type => broadcast.when(`${type}stories`)
};
