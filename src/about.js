function addAboutContent() {
  let parentDiv = document.getElementById('content');
  parentDiv.innerHTML = '';
  let aboutHeader = document.createElement('h1');
  aboutHeader.textContent = 'About Us';
  let aboutText = document.createElement('p');
  aboutText.textContent = `
  Welcome to our cozy coffeehouse, where every cup tells a story. We are passionate about creating a warm
   and inviting space for coffee enthusiasts to gather, unwind, and connect. Our carefully curated selection
   of specialty coffees from around the world is sure to delight your senses and awaken your taste buds.
   Whether you're seeking a quiet corner to work or looking to catch up with friends over a delicious latte,
   our friendly baristas are here to craft the perfect drink for you. Come join us at our coffeehouse and
   experience the perfect blend of great coffee, good company, and memorable moments.`;
  // let aboutImage = new Image();
  // aboutImage.src = about;
  parentDiv.append(aboutHeader, aboutText);
}

export { addAboutContent };
