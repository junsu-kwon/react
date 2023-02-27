(async () => {
  let url =
    'https://api.github.com/rasdasdepos/javascript-tutorial/ko.javascript.info/commits';
  let response = fetch(url);

  console.log(response);

  response.then((response) => response.text()).then(json=> console.log(json));


  // let promise = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("완료!"), 3000)
  // });

  // console.log(promise);
  // let result = await promise; // 프라미스가 이행될 때까지 기다림 -> 프로미스 내에서만 실행이 잠시 '중단’
  
  // console.log(promise);
  // console.log(result);


})();


// let commits = await response.json(); // 응답 본문을 읽고 JSON 형태로 파싱함

// alert(commits[0].author.login);
