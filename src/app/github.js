class Github {
  constructor(clientId,clientSecret) {
    this.client_id = clientId;
    this.client_secret = clientSecret;
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async fetchUser(user){
    const userDataR = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const userReposAll = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repos_count}&sort=${this.repos_sort}`);

    const userData = await userDataR.json();
    const userRepos = await userReposAll.json();
    return {
      userData,
      userRepos
    };
  }
}

module.exports = Github;
