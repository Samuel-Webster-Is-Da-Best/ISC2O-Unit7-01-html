let numb = Math.floor(Math.random() * 10 + 1)
document.getElementById("button").addEventListener("click", guess)

function guess () {
  let answer = document.getElementById("answer").value
  let theirs = parseInt (answer)
  if (theirs == numb) {
    alert('you got it!')
    document.getElementById("answer").value = ''
    numb = Math.floor(Math.random() * 10 + 1)
  } else {
    alert('try again!')
    document.getElementById("answer").value = ''
  }
}
