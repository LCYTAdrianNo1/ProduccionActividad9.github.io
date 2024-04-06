document.getElementById('registerButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    
    document.getElementById('card').classList.add('moveRight');
    setTimeout(function() {
      document.getElementById('card').style.display = 'none';
    }, 1000); // 1000 milliseconds = 1 second
  });
  