//4. For every letter in the alphabet, return the number of it, except if it's a vowel, then return the same number as previous (a->1, b->2, c->3, d->4, e->4, f->5, ...)
var list2 = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

var numberExceptVowel = () => {
    var result = [];
    var count = 1;

    if (list2.length === 0) return result;

    for (let i = 'a'; i <= 'z'; i++) {
        if (list2.includes(i)) {
            result.push(i + "->" + count);
        } else {
            count++;
            result.push(i + "->" + count);
        }
    }

    for (let i = 'A'; i <= 'Z'; i++) {
        if (list2.includes(i)) {
            result.push(i + "->" + count);
        } else {
            count++;
            result.push(i + "->" + count);
        }
    }

    return result.toString();
}