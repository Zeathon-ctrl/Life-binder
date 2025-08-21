javascript

function addEntry(type) {
  const entry = document.createElement('div');
  entry.className = 'entry';
  entry.textContent = `New ${type} entry added`;
  document.getElementById('entries').appendChild(entry);
}
