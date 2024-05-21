//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

function downloadAndDisplayImages(imageUrls) {
    const promises = imageUrls.map(imageUrl => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load image's URL: ${imageUrl}`));
            img.src = imageUrl.url; // Access the 'url' property of imageUrl
        });
    });

    Promise.all(promises)
        .then(images => {
            const outputDiv = document.getElementById('output');
            images.forEach(image => {
                outputDiv.appendChild(image);
            });
        })
        .catch(error => {
            console.error(error);
        });
}

document.getElementById('download-images-button').addEventListener('click', () => {
    const images = [
        { url: "https://picsum.photos/id/237/200/300" },
        { url: "https://picsum.photos/id/238/200/300" },
        { url: "https://picsum.photos/id/239/200/300" },
    ];

    downloadAndDisplayImages(images); // Pass 'images' instead of 'imageUrls'
});
