import type { Endpoints } from '@octokit/types'

type listUserReposResponse =
  Endpoints['GET /repos/{owner}/{repo}']['response']['data']

export default async () => {
  const { data: repos, pending } = await useLazyAsyncData(
    'repos',
    () =>
      $fetch<listUserReposResponse[]>(
        'https://api.github.com/users/owlnai/repos',
        {
          query: {
            type: 'all',
          },
        },
      ),
    {
      server: false,
      transform: repos =>
        repos
          .filter((repo) => {
            return !repo.fork && !repo.private && repo.name !== '.github' && repo.name !== 'owlnai'
          })
          .sort((a, b) => {
            return b.stargazers_count - a.stargazers_count
          })
          .map(
            ({
              id,
              name,
              html_url,
              description,
              stargazers_count,
              stargazers_url,
              homepage,
            }) => {
              return {
                id,
                name,
                html_url,
                description,
                stargazers_count,
                stargazers_url,
                homepage,
              }
            },
          ),
    },
  )
  return {
    pending,
    repos,
  }
}
