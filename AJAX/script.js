const profileImage = document.querySelector('.profileImage');
const followerSpan = document.querySelector('.followers');
const followingSpan = document.querySelector('.following');
const clickButton = document.querySelector('.card-button');

const xhr = new XMLHttpRequest();
const user = 'https://api.github.com/users/Ujef55';
xhr.open('GET', user);
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        // console.log(data);
        const profilePic = data.avatar_url;
        const followers = data.followers;
        const following = data.following;
        function showData() {
            followerSpan.textContent = `Followers is ${followers}`;
            followingSpan.textContent = `Following is ${following}`;
            profileImage.setAttribute('src', profilePic);
        }
        clickButton.addEventListener('click', showData);
    }
}
xhr.send();