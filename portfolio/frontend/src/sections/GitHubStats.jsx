import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

export default function GitHubStats() {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    contributions: 0,
    publicRepos: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/Uddissh')
        const userData = await userRes.json()

        const reposRes = await fetch('https://api.github.com/users/Uddissh/repos?sort=stars&per_page=6')
        const reposData = await reposRes.json()

        setStats({
          repos: userData.public_repos,
          followers: userData.followers,
          contributions: userData.public_repos,
          publicRepos: reposData
        })
      } catch (err) {
        console.error('GitHub API error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  const statCards = [
    { label: 'Public Repos', value: stats.repos, icon: '📦' },
    { label: 'Followers', value: stats.followers, icon: '👥' },
    { label: 'Projects', value: stats.publicRepos.length, icon: '⚡' }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <Github className="text-primary" size={28} />
          <h2 className="section-title mb-0">GitHub Activity</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {statCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <span className="text-4xl mb-2">{card.icon}</span>
              <p className="text-3xl font-bold text-primary mb-1">{loading ? '...' : card.value}</p>
              <p className="text-sm text-muted-foreground">{card.label}</p>
            </motion.div>
          ))}
        </div>

        {!loading && stats.publicRepos.length > 0 && (
          <div>
            <h3 className="text-lg font-bold mb-6 text-center">Top Repositories</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {stats.publicRepos.slice(0, 6).map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="glass-card p-4 hover:border-primary group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-primary group-hover:text-secondary transition-colors">{repo.name}</h4>
                    <span className="text-xs bg-accent px-2 py-1 rounded">★ {repo.stargazers_count}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{repo.description || 'No description'}</p>
                  {repo.language && (
                    <span className="text-xs text-primary mt-3 inline-block">{repo.language}</span>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
