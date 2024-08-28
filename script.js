fetch('/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: document.getElementById('name').value })
  })
  .then(response => response.json())
  .then(data => document.getElementById('data').innerHTML = `Hello, ${data.name}!`);