const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "assets/vin-avatar.png",
        post: "assets/vincent.png",
        comment: "just took a few mushrooms lol",
        likes: 21
    },

    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "assets/josh-avatar.png",
        post: "assets/josee.png",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "assets/gus-avatar.png",
        post: "assets/gustavo.png",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    }
]

const postContainer = document.querySelector(".post-container");
const maxWordsBeforeBreak = 40;

for (let i = 0; i < posts.length; i++) {
    const poster = posts[i];
    const words = poster.comment.trim().split(/\s+/);
    let formattedComment;
  
    if (words.length > maxWordsBeforeBreak) {
      const firstLine = words.slice(0, maxWordsBeforeBreak).join(' ');
      const rest = words.slice(maxWordsBeforeBreak).join(' ');
      formattedComment = `${firstLine}<br>${rest}`;
    } else {
      formattedComment = poster.comment;
    }
  
    const section = document.createElement('section');
    section.classList.add('section-one');
  
    section.innerHTML = `
      <div class="heading">
        <img src="${poster.avatar}" alt="profile picture" class="profile-picture">
        <div class="main-heading">
          <h2>${poster.name}</h2>
          <p class="location">${poster.location}</p>
        </div>
      </div>
      <img src="${poster.post}" alt="Your picture post" class="post-picture" id="post-img">
      <div class="reactions-top">
        <div class="icon"><i class="fa-regular fa-heart"></i></div>
        <div class="icon"><i class="fa-regular fa-comment"></i></div>
        <div class="icon"><i class="fa-regular fa-paper-plane"></i></div>
      </div>
      <div class="reaction-bottom">
        <h3 class="no-of-likes">${poster.likes} likes</h3>
        <div class="caption">
          <p><span>${poster.username}</span> ${formattedComment}</p>
        </div>
      </div>
    `;
  
    postContainer.appendChild(section);
  }

  
const likeBtn = document.querySelector("#like-btn");

// likeBtn.addEventListener.forEach(btn => {
//     btn.addEventListener("click", () => {
//         const likes = document.querySelector("#no-of-likes");
//         likes.textContent = `${poster.likes + 1} likes`;
//     });
// });
document.querySelectorAll(".like-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        const index = this.getAttribute("data-index"); // Get the post index
        posts[index].likes += 1; // Increment likes
        document.getElementById(`likes-${index}`).innerHTML = `${posts[index].likes} likes`; // Update the UI
    });
});
