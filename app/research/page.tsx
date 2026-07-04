import researchData from '@/data/researchData'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Research' })

export default function Research() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Research
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Academic publications and research work
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-8">
            {researchData.map((d) => (
              <article
                key={d.title}
                className="overflow-hidden rounded-md border-2 border-gray-200/60 p-6 dark:border-gray-700/60"
              >
                <h2 className="mb-2 text-2xl leading-8 font-bold tracking-tight">
                  <Link href={d.href} className="text-gray-900 dark:text-gray-100">
                    {d.title}
                  </Link>
                </h2>
                <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                  {d.journal} — {d.volumeIssue}
                </p>
                <p className="prose mb-4 max-w-none text-gray-500 dark:text-gray-400">
                  {d.abstract}
                </p>
                <Link
                  href={d.href}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
                  aria-label={`Read paper: ${d.title}`}
                >
                  Read paper &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
