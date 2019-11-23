/*
You have a long piece of text, and you want to send it to your friend as a series of SMS messages. Your text consists of English letters (uppercase and lowercase) and spaces. The text doesn't contain any leading spaces at the beginning or trailing spaces at the end. There are no two consecutive spaces in the text.

One proper SMS can contain at most K characters. If the text is longer, it needs to be split into parts. Each part should be sent in a separate message that fulfills the maximum length requirement. Text may not be split within words. The order of the words and the messages can't change, so that we can later concatenate the resulting messages to retrieve the original text. Spaces at the start and end of all messages are removed, and thus are not accounted for in the overall message length.

The goal is to count the number of SMS messages needed to accommodate the whole text, keeping the length of each message less than or equal to K. The total number of SMS messages must be kept to a minimum, however; it would not be acceptable, for example, to take the wasteful approach of programmatically sending one SMS for each word in the original text!

Write a function: function solution(S, K);

that, given a string S representing the text that needs to be split and an integer K that is equal to the maximum possible message length, returns the number of SMS messages needed.

For instance, given string S="SMS messages are really short" and K = 12, your function should return 3. You could split this text into proper messages as follows:

"SMS messages" "are really" "short"

If it's impossible to split text into proper SMS messages, your function should return −1.

Assume that:

K is an integer within the range [1..500];
S is a non-empty string containing at most 500 characters: only letters and spaces, there are no spaces at the beginning and at the end of S; also there can't be two or more consecutive spaces in S. In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
*/

function solution(S, K) {
  // text validation
  const words = S.split(' ');
  const notValid = words.some(word => word.length > K);
  if (notValid) return -1;

  // sms messages counting
  let currentSms = words.shift();
  let count = 1;
  while (words.length) {
    const word = words.shift();
    currentSms += ` ${word}`;
    if (currentSms.length > K) {
      ++count;
      currentSms = word;
    }
  }

  return count;
}

const text = 'SMS messages are really short';
console.log(solution(text, 12)); // 3