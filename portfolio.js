document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmationMessage').classList.remove('hidden');
    document.getElementById('commentForm').reset();
});