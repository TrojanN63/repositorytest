function verify(){
    letter = (document.getElementById("letter").value).toLowerCase()
    string = (document.getElementById("string").value).toLowerCase()
    result = string.split(letter).length-1
    document.getElementById("result").innerHTML = `the character appears ${result} times in the sentence`
}