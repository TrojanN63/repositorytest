function verify(){
    var text = document.getElementById("text").value.split("")
    var reverse = []
    for (i=0;i<text.length;i++){
        reverse.push(text[text.length-1-i])
    }
    if (text.join("") == reverse.join("")){
        result = "this shit is a fucking palindrome, hope you don't have aibofobia"
    }
    else {result = "nah, this ain't a palindrome"}
    document.getElementById("result").innerHTML = (result)
}