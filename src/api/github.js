async function fetchPinnedRepositories() {
  const token = import.meta.env.VITE_TOKEN;
  const username = 'gufernandess';
  
  const query = `
  {
    user(login: "${username}") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            stargazerCount
            forkCount
            primaryLanguage {
              name
            }
            url
            homepageUrl
          }
        }
      }
    }
  }`;

  try {
      const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ query })
      });

      if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
      }

      const data = await response.json();

      const pinnedRepos = data.data.user.pinnedItems.nodes.map(repo => ({
          name: repo.name,
          description: repo.description,
          stars: repo.stargazerCount,
          forks: repo.forkCount,
          language: repo.primaryLanguage ? repo.primaryLanguage.name : null,
          url: repo.url,
          homepage: repo.homepageUrl ? repo.homepageUrl : null
      }));

      return pinnedRepos;

  } catch (error) {
      return { error: error.message };
  }
}

export default fetchPinnedRepositories;