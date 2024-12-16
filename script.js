function mergePDF() {
    const files = document.getElementById('pdfInput').files;
    if (files.length < 2) {
        alert("Please select at least two PDF files.");
        return;
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append('pdfs', files[i]);
    }

    fetch('your-server-endpoint', {
        method: 'POST',
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'merged.pdf';
        downloadLink.click();
    })
    .catch(error => console.error('Error merging PDFs:', error));
}
