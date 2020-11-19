//5. Do the same as previous, but now for every 5th letter, (E, J, ....) return the letter that comes before it. Ex: at the letter E, return D instead of 4  (a->1, b->2, c->3, d->4, e->D, f->5, ...)
var numberEveryFive = () => {
    var result = [];
    var count = 1;

    for (let i = 'a'; i <= 'z'; i++) {
        if (count < 5) {
            result.push(i + "->" + count);
            count++;
        } else {
            result.push(i + "->" + i-1-32);
            count = 1;
        }
    }

    return result.toString();
}