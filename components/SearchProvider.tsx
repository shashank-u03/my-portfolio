'use client'

import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'

interface SearchDocument {
  id: string
  title: string
  content: string
  section: string
  url: string
  subtitle?: string
}

export default function SearchProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const searchDocumentsPath =
    siteMetadata.search?.provider === 'kbar'
      ? siteMetadata.search.kbarConfig.searchDocumentsPath
      : '/search.json'

  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath,
        defaultActions: [
          {
            id: 'homepage',
            name: 'Home',
            keywords: '',
            shortcut: ['h', 'h'],
            section: 'Pages',
            perform: () => router.push('/'),
          },
          {
            id: 'blogs',
            name: 'Blogs',
            keywords: '',
            shortcut: ['b'],
            section: 'Pages',
            perform: () => router.push('/blogs'),
          },
          {
            id: 'open-source',
            name: 'Open Source',
            keywords: '',
            section: 'Pages',
            perform: () => router.push('/open-source'),
          },
          {
            id: 'research',
            name: 'Research',
            keywords: '',
            section: 'Pages',
            perform: () => router.push('/research'),
          },
          {
            id: 'about',
            name: 'About',
            keywords: '',
            shortcut: ['a'],
            section: 'Pages',
            perform: () => router.push('/about'),
          },
        ],
        onSearchDocumentsLoad(json) {
          return (json as SearchDocument[]).map((doc) => ({
            id: doc.id,
            name: doc.title,
            keywords: doc.content,
            section: doc.section,
            subtitle: doc.subtitle || '',
            perform: () => router.push(doc.url),
          }))
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
