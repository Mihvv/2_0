(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function() {
    answer.textContent = "Loading…"

    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(array => {
          let html = "<ul>";
          array.forEach(post => {
            html += `<li><strong>${post.title}</strong><br>${post.body}</li>`;
          });
          html += "</ul>";
          answer.innerHTML = html;
        })
    }, 1000)
  })

  cw2.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(post => {
        let html = '<h3>';
        html += `${post.title}<p>${post.body}</p>`;
        html += '</h3>';
        answer.innerHTML = html;
      })
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
