const linksSocialMedia = {
  github: 'IsabelleHeloisa',
  youtube: 'UCzTaf8YOmuG_M3CIgS6hvZQ',
  instagram: 'izzy_souza4',
  twitter: 'Isabelle_Souza2'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    const channel = social == 'youtube' ? 'channel/' : ''
    li.children[0].href = `https://${social}.com/${channel}${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
