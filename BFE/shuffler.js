function shuffle(arr) {
  let lastIdx = arr.length -1;
  let insertIdx = 0;

  while( insertIdx <= lastIdx){
      const randomIdx = Math.floor( Math.random() * (insertIdx +1))

      let temp = arr[insertIdx];
      arr[insertIdx] = arr[randomIdx];
      arr[randomIdx] = temp;

      insertIdx++;
  }
}