//2. Reverse the sentence " Josephine likes apples" -> " apples likes Josephine ")
var str2 = "Josephine likes apples";

var reverseSentence = (str2) => {
    var result = [];
    if (str2.length === 0) return result;

    str2.trim().split(" ")
        .forEach((pro) => {
            result.push(pro);
        })

    result.reverse().join(" ");

    return result;
}