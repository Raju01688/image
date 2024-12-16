function resizeImage() {
    const fileInput = document.getElementById('imageInput');
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const qualityInput = document.getElementById('quality');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    if (fileInput.files && fileInput.files[0]) {
        const img = new Image();
        img.onload = function () {
            const width = parseInt(widthInput.value) || img.width;
            const height = parseInt(heightInput.value) || img.height;
            canvas.width = width;
            canvas.height = height;

            ctx.drawImage(img, 0, 0, width, height);
            
            // Set image quality if required
            const quality = qualityInput.value ? qualityInput.value / 100 : 1;
            const resizedDataUrl = canvas.toDataURL('image/jpeg', quality);
            console.log(resizedDataUrl); // Here you can provide the resized image for download or further use
        };
        img.src = URL.createObjectURL(fileInput.files[0]);
    }
}
