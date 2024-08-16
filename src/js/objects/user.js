const user ={
  avatarUrl: '',
  name: '',
  bio: '',
  userName: '',
  followers: '',
  following: '',
  repositories: [],
  events: [],
  setInfo(gitHubUser){
    this.avatarUrl = gitHubUser.avatar_url
    this.name = gitHubUser.name
    this.bio = gitHubUser.bio
    this.userName = gitHubUser.login
    this.followers = gitHubUser.followers
    this.following = gitHubUser.following
  },
  setRepositories(repositories){
    this.repositories = repositories
  },
  setEvents(events){
    this.events = events.map(event => {
      if (event.type === 'PushEvent') {
          return {
              type: 'PushEvent',
              repoName: event.repo.name,
              commits: event.payload.commits.map(commit => commit.message)
          };
      } else if (event.type === 'CreateEvent') {
          return {
              type: 'CreateEvent',
              repoName: event.repo.name,
              refType: event.payload.ref_type
          };
      }
  });
}
};

export { user }