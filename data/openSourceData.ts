interface OpenSourceContribution {
  title: string
  description: string
  href: string
  status: 'merged' | 'open'
  project: string
}

const openSourceData: OpenSourceContribution[] = [
  {
    title: 'perf: guard isDeferred() behind experiments.deferImport in ConcatenatedModule',
    description:
      'Guards moduleGraph.isDeferred() behind experiments.deferImport in ConcatenatedModule, avoiding redundant graph traversals when deferImport is disabled.',
    href: 'https://github.com/webpack/webpack/pull/21096',
    status: 'merged',
    project: 'Webpack',
  },
  {
    title: 'feat(nextjs-mf): add skipFederatedStats option for improving build time',
    description:
      'Adds a skipFederatedStats option to NextFederationPlugin so CSR-only apps can opt out of generating federated-stats.json.',
    href: 'https://github.com/module-federation/core/pull/4732',
    status: 'open',
    project: 'Module Federation',
  },
  {
    title: 'feat(retry-plugin): support function-based retryDelay for exponential backoff',
    description:
      'Extends @module-federation/retry-plugin so retryDelay can be a fixed number or a callback (attempt) => number.',
    href: 'https://github.com/module-federation/core/pull/4828',
    status: 'merged',
    project: 'Module Federation',
  },
  {
    title: 'fix(retry-plugin): externalize runtime types from DTS bundle',
    description:
      'Externalizes @module-federation/runtime and @module-federation/runtime-core from the retry-plugin DTS bundle, fixing TypeScript type incompatibility errors.',
    href: 'https://github.com/module-federation/core/pull/4853',
    status: 'merged',
    project: 'Module Federation',
  },
]

export default openSourceData
