document.addEventListener("DOMContentLoaded", function () {
    const breakingNews = document.querySelector(".breaking-news");
    breakingNews.style.animation = "fadein 2s ease-in-out";

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "red";
        });
        link.addEventListener("mouseout", function () {
            this.style.color = "white";
        });
    });
});

/* CSS Animations */
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
