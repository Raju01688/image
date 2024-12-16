document.getElementById('pdf-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('pdf-preview-img').src = e.target.result; // Placeholder for PDF preview image
            document.querySelector('.file-name').innerText = file.name;
        };
        reader.readAsDataURL(file);
    }
});

document.querySelector('.rotate').addEventListener('click', function() {
    const previewImage = document.getElementById('pdf-preview-img');
    previewImage.style.transform = 'rotate(90deg)';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('pdf-upload').value = '';
    document.getElementById('pdf-preview-img').src = '';
    document.querySelector('.file-name').innerText = '';
});
