const autocompleteDiv = document.getElementById('textArea');
const suggestionsElement = document.getElementById('suggestions');
const autoCompleteArray = ["education", "experience", "author", "whoami", "help", 'clear', "carrier"];



autocompleteDiv.addEventListener('input', function() {
  const userInput = autocompleteDiv.textContent.trim();
  const matchingSuggestions = autoCompleteArray.filter(item =>
    item.startsWith(userInput)
  );

  if (userInput === '') {
    suggestionsElement.innerHTML = '';
  } else if (matchingSuggestions.length > 0) {
    suggestionsElement.innerHTML = matchingSuggestions
      .map(suggestion => `<div>${suggestion}</div>`)
      .join('');
  } else {
    suggestionsElement.innerHTML = '';
  }
});

autocompleteDiv.addEventListener('keydown', function(event) {
  if (event.key === 'Tab') {
    event.preventDefault();
    const firstSuggestion = suggestionsElement.querySelector('div');
    if (firstSuggestion) {
      autocompleteDiv.textContent = firstSuggestion.textContent;
      suggestionsElement.innerHTML = '';
      autocompleteDiv.focus();

      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(autocompleteDiv);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
});

autocompleteDiv.addEventListener('keyup', function(event) {
  if (event.key === 'Backspace' && autocompleteDiv.textContent.trim() === '') {
    suggestionsElement.innerHTML = ''; // Hide suggestions on backspace to empty
  }
});

