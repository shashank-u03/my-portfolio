import openSourceData from '@/data/openSourceData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Open Source' })

export default function OpenSource() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Open Source
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Contributions to open source projects
          </p>
        </div>
        <div className="container py-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {openSourceData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                href={d.href}
                status={d.status}
                project={d.project}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
