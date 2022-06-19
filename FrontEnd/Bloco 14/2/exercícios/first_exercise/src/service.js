const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + 1
  }
console.log(getRandom(1, 100))
