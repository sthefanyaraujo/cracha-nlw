const linksSocialMedia = {
  github: 'sthefanyaraujo',
  youtube: 'channel/UCrmdZ32PeZc0oRemsJbatqw',
  linkedin: 'in/sthefany-araujo1',
  instagram: 'maykbrito',
  twitter: 'SthefanyAraaujo'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()


function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userImage.src = data.avatar_url
  })
}
getGitHubProfileInfos()