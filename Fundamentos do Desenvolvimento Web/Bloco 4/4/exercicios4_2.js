function isPalindrome(word) {
  let reverseWord = word.split('').reverse().join('');
  if (reverseWord === word) {
    return true;
  }
  return false;
}
console.log(isPalindrome('arara'));
console.log(isPalindrome('disponibilidade'));

function indexOfTheHighest(nums) {
  let highestIndex = 0;
  for (let index in nums) {
    if (nums[highestIndex] < nums[index]) {
      highestIndex = index;
    }
  }
  return highestIndex;
}
console.log(indexOfTheHighest([1, 4, 5, 2, 1, 9]));

function indexOfTheLowest(nums) {
  let lowestIndex = 0;
  for (let index in nums) {
    if (nums[lowestIndex] > nums[index]) {
      lowestIndex = index;
    }
  }
  return lowestIndex;
}
console.log(indexOfTheLowest([3, 4, 5, 2, 1, 9]));

function longestWord(words) {
  let longestWord = words[0];
  for (let i in words) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(longestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function repeatingInteger(nums) {
  let countRepeating = 0;
  let countNumber = 0;
  let indexRepeatingNumber = 0;
  for (let i in nums) {
    let checkNumber = nums[i];
    for (let j in nums) {
      if (checkNumber === nums[j]) {
        countNumber += 1;
      }
    }
    if (countNumber > countRepeating) {
      countRepeating = countNumber;
      indexRepeatingNumber = i;
    }
    countNumber = 0;
  }
  return nums[indexRepeatingNumber];
}
console.log(repeatingInteger([3, 4, 5, 2, 1, 9, 1, 3, 3, 4]));