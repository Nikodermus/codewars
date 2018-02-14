function print(array) {
  const output = document.querySelector('.output') || document.createElement('p');
  output.classList.add('output');
  array.map(string => {
    if (output && output.textContent) {
      output.innerHTML += '\n';
    } else {
      document.body.appendChild(output);
    }
    output.textContent += string;
  });
}
