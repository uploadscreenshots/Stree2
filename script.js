const repoURL = 'https://api.github.com/repos/gongobongofounder/Stree2/contents/'; // Replace with your GitHub repo details

async function fetchMedia() {
    try {
        const response = await fetch(repoURL);
        const data = await response.json();

        const mediaGallery = document.getElementById('media-gallery');
        const videoGalleryContent = document.querySelector(".video-gallery .contents");
        const imageGalleryContent = document.querySelector(".image-gallery .contents");

        data.forEach(file => {
            if (file.name.endsWith('.jpg') || file.name.endsWith('.png') || file.name.endsWith(".ARW")) {
                if (file.name.endsWith(".jpg")) {

                    const imagecard = document.createElement("div");
                    imagecard.setAttribute("class", "image-card");
                    imageGalleryContent.appendChild(imagecard);
                    const img = document.createElement('img');
                    const a = document.createElement('a');
                    const baseName = file.name.substring(0, file.name.lastIndexOf('.'));  // Extracts up to the last dot

                    a.href = `https://raw.githubusercontent.com/gongobongofounder/Stree2/main/${baseName}`;
                    img.src = file.download_url;
                    img.alt = file.name;
                    imagecard.appendChild(a);
                    a.appendChild(img);

                }



            } else if (file.name.endsWith('.mp4')) {
                const videocard = document.createElement("div");
                videocard.setAttribute("class", "video-card");
                videoGalleryContent.appendChild(videocard);
                const video = document.createElement('video');
                video.controls = true;
                video.src = file.download_url;
                videocard.appendChild(video);
            }
        });
    } catch (error) {
        console.error('Error fetching media:', error);
    }
}

fetchMedia();
