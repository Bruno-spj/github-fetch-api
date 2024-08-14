import { getUser } from './services/user.js'
import { getRepositories } from './services/repositories.js'
import { user } from './objects/user.js'
import { screen } from './objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () =>{
const userName = document.getElementById('input-search').value
if(userName === ''){
  alert('Preencha o campo de busca do usuário gitHub, por favor!')
  return
}
  getUserData(userName)
})

async function getUserData(userName){
  const userResponse = await getUser(userName)

  if(userResponse.message === 'Not Found'){
    screen.renderNotFound()
    return
  }
  const repositoriesResponse = await getRepositories(userName)

  user.setInfo(userResponse)
  user.setRepositories(repositoriesResponse)

  screen.renderUser(user)
 
}




