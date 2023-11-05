document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll(".gallery-image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");

    galleryImages.forEach(image => {
        image.addEventListener("click", function() {
            const imgSrc = this.getAttribute("data-src");
            lightboxImage.setAttribute("src", imgSrc);
            lightbox.style.display = "flex";
        });
    });

    const closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", function() {
        lightbox.style.display = "none";
    });
    document.addEventListener("DOMContentLoaded", function() {
        const blogForm = document.getElementById("blog-form");
        const blogPosts = document.getElementById("blog-posts");
    
        blogForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const title = document.getElementById("blog-title").value;
            const content = document.getElementById("blog-content").value;
    
            const article = document.createElement("article");
            const titleElement = document.createElement("h3");
            const contentElement = document.createElement("p");
    
            titleElement.textContent = title;
            contentElement.textContent = content;
    
            article.appendChild(titleElement);
            article.appendChild(contentElement);
    
            blogPosts.appendChild(article);
    
            blogForm.reset();
        });
    });
    
});
