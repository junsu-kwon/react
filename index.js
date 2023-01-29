async function f() {
  await new Promise((resolve, reject) =>
    setTimeout(() => reject('4. 에러!'), 3000),
  ).then(
    (resolve) => console.log(`얘는 안뜰거야 ${resolve}`),
    (error) => console.log(`얘가 뜨겠지 ${error}`),
  );

  return '얘는 f함수 반환값이야';
}

let promise = f();

console.log('얘는 f함수 반환값 promise야 : ', promise);

promise.then(
  (resolve) => console.log(resolve),
  (error) => console.log(error),
);

console.log('얘는 그냥 한번 해보자');
