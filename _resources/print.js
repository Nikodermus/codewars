function print(string) {
  const output = document.querySelector('.output') || document.createElement('p');
  output.classList.add('output');
  if (output && output.textContent) {
    console.log()
    output.innerHTML += '\n';
  } else {
    document.body.appendChild(output)
  }
  output.textContent += string;
}