/* Promise, with then and catch starts*/
const p1 = new Promise((resolve, reject) => {
  let flag = true;

  if (flag) {
    resolve('freaking resolved');
  } else {
    reject('nope, failed');
  }
});

// p1.then((msg) => {
//   console.log(msg);
// }).catch((err) => {
//   console.log(err);
// });
/* Promise, with then and catch ends*/

/* Promise, with then and catch as a function starts*/
function Promise1() {
  let flag = true;

  const p1 = new Promise((resolve, reject) => {
    if (flag) {
      resolve("of course it's resolved");
    } else {
      reject('nopeeeeeeeee, failed gg');
    }
  });

  return p1;
}

// Promise1()
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
/* Promise, with then and catch as a function ends*/

/* Promise, with try and catch starts*/
function Promise2() {
  let flag = true;

  return new Promise((resolve, reject) => {
    if (flag) {
      setTimeout(() => {
        resolve('resolved!');
      }, 5000);
    } else {
      setTimeout(() => {
        reject('failed!');
      }, 5000);
    }
  });
}

function Promise3() {
  let flag = true;

  return new Promise((resolve, reject) => {
    if (flag) {
      resolve('resolved!!!');
    } else {
      reject('failed!!!');
    }
  });
}

async function runFunc() {
  try {
    console.log('start try');
    const response = await Promise2();
    console.log('res1: ' + response);
    const response2 = await Promise3();
    console.log('res2: ' + response2);
    console.log('end try');
  } catch (err) {
    console.log(err);
  }
}

// runFunc();
/* Promise, with try and catch ends*/

/* Promise.all() starts*/
function testPromiseAll() {
  let flag = true;

  const p1 = new Promise((resolve, reject) => {
    if (flag) {
      resolve('1:resolved');
    } else {
      reject('1:failed');
    }
  });

  const p2 = new Promise((resolve, reject) => {
    if (flag) {
      resolve('2:resolved');
    } else {
      reject('2:failed');
    }
  });

  const p3 = new Promise((resolve, reject) => {
    if (flag) {
      resolve('3:resolved');
    } else {
      reject('3:failed');
    }
  });

  return Promise.all([p1, p2, p3]);
}

// testPromiseAll()
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
/* Promise.all() ends*/

/* Promise.all() to append script into <head /> starts*/
function appendElementToHead() {
  const flag = false;
  const d = document.getElementsByTagName('head')[0];

  const p1 = new Promise((resolve, reject) => {
    if (flag) {
      let _script = document.createElement('script');

      _script.id = 'test-script';
      _script.type = 'text/javascript';

      d.appendChild(_script);
      resolve(true);
    } else {
      let _script = document.createElement('script');

      _script.id = 'test-script-2';
      _script.type = 'text/javascript';

      d.appendChild(_script);
      reject(false);
    }
  });

  const p2 = new Promise((resolve, reject) => {
    if (flag) {
      let _nonscript = document.createElement('nonscript');

      _nonscript.id = 'test-nonscript';

      d.appendChild(_nonscript);
      resolve(true);
    } else {
      let _nonscript = document.createElement('nonscript');

      _nonscript.id = 'test-nonscript-2';

      d.appendChild(_nonscript);
      reject(false);
    }
  });

  return Promise.all([p1, p2]);
}

appendElementToHead();
/* Promise.all() to append script into <head /> ends*/
