const screen = {
  userProfile: document.querySelector('.profile-data'),
  
  renderUser(user) {
      this.userProfile.innerHTML = `<div class="info">
                    <img src="${user.avatarUrl}"/>
                    <div class="data">
                      <h1>${user.name}</h1>
                      <p>${user.bio}</p>
                      <p>Seguidores: 👥${user.followers}</p>
                      <p>Seguindo: 👤${user.following}</p>
                    </div>
                  </div>`;

                   
      let eventsItems = '';
      user.events.forEach(event => {
          if (event.type === 'PushEvent') {
              event.commits.forEach(commit => {
                  eventsItems += `<li>PushEvent - Repo: ${event.repoName}, Commit: ${commit}</li>`;
              });
          } else if (event.type === 'CreateEvent') {
              eventsItems += `<li>CreateEvent - Repo: ${event.repoName}, Ref Type: ${'Sem mensagem de commit'}</li>`;
          }
      });
      
      if (user.events.length > 0) {
          this.userProfile.innerHTML += `<div class="events section">
                                            <h2>Eventos Recentes</h2>
                                            <ul>${eventsItems}</ul>
                                        </div>`;
      }
    
      let repositoriesItems = '';
      user.repositories.forEach(repos => repositoriesItems += `<li>
                                                                  <a href="${repos.html_url}" target="_blank">
                                                                    ${repos.name}
                                                                  </a>
                                                                    <div class="repositories-list">
                                                                      <p>👨‍💻${repos.language}</p>
                                                                      <p>🍽️${repos.forks}</p>
                                                                      <p>🌟${repos.stargazers_count}</p>
                                                                      <p>👀${repos.watchers}</p>
                                                                    </div>
                                                                </li>`);
                                                                  
      
      if (user.repositories.length > 0) {
          this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItems}</ul>
                                        </div>`;
      }

  },
  
  renderNotFound() {
      this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
  }
};

export { screen };
