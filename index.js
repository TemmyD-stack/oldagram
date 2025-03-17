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
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "assets/gus-avatar.png",
        post: "assets/gustavo.png",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "assets/josh-avatar.png",
        post: "assets/Joseph.png",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postContainer = document.querySelector(".post-container");

for(let i = 0; i < posts.length; i++){
    const post = posts[i];
    const postElement = `
        <section class="section-one">
            <div class="heading">
                <img src=${post.avatar} alt="profile picture" class="profile-picture">
                <div class="main-heading">
                    <h2>${post.name}</h2>
                    <p class="location">${post.location}</p>
                </div>
            </div>
            <img src="${post.post}" alt="">
            <div class="reactions-top">
                <div class="icon"><i class="fa-regular fa-heart"></i></div>
                <div class="icon"><i class="fa-regular fa-comment"></i></div>
                <div class="icon"><i class="fa-regular fa-paper-plane"></i></div>
            </div>
            <div class="reaction-bottom">
                <h3 class="no-of-likes">${post.likes} likes</h3>
                <div class="caption">
                    <p class="username"><span>${post.username}</span>${post.comment}</p>
                </div>
            </div>

        </section>
    `;

    postContainer.innerHTML += postElement;
}
