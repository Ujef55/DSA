const profileImage = document.querySelector('.profileImage');
const followerSpan = document.querySelector('.followers');
const followingSpan = document.querySelector('.following');
const bioSpan = document.querySelector('.bio');
const clickButton = document.querySelector('.card-button');
const link = document.querySelector('.link');
const cardDescription = document.querySelector('.card-desciption');

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
        const bio = data.bio;
        function showData() {
            profileImage.setAttribute('src', profilePic);
            bioSpan.textContent = `Bio - ${bio}`;
            followerSpan.textContent = `Followers is ${followers}`;
            followingSpan.textContent = `Following is ${following}`;
            link.style.display = 'block';
            cardDescription.style.display = 'none';
        }
        clickButton.addEventListener('click', showData);
    }
}
xhr.send();