import { useState, useMemo } from 'react'

export function useSearch(items, searchFields) {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return items
    
    const q = query.toLowerCase()
    return items.filter(item =>
      searchFields.some(field => {
        const value = item[field]
        if (Array.isArray(value)) {
          return value.some(v => String(v).toLowerCase().includes(q))
        }
        return String(value).toLowerCase().includes(q)
      })
    )
  }, [query, items, searchFields])

  return { query, setQuery, results }
}
