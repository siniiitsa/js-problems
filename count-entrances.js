/* Напишем функцию, считающую количество вхождений каждого слова в предложение. Результатом работы этой функции является объект, в котором ключ — "слово", а значение — "количество вхождений". Пример:
 */

const getWordsCount = (sentence) => {
  return sentence
    .split(' ')
    .reduce((acc, word) => {
      if (acc.hasOwnProperty(word)) {
        acc[word] += 1;
      } else {
        acc[word] = 1;
      }

      return acc;
    }, {});
}


const content = 'cat dog cat eye see cat dog';

const result = getWordsCount(content);
console.log(result);

// {
//     cat: 3,
//     dog: 2,
//     eye: 1,
//     see: 1,
// };