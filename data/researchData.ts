interface ResearchPublication {
  title: string
  abstract: string
  href: string
  journal: string
  volumeIssue: string
}

const researchData: ResearchPublication[] = [
  {
    title: 'An Efficient Hybrid Cooperative Target Search for UAV Swarms',
    abstract:
      'Among the wide applications of unmanned aerial vehicles (UAVs), target search and tracking are of immense significance due to their numerous usage in critical applications such as surveillance, rescue missions, and defense. In this article, unlike previous swarm learning methods, which rely solely on reinforcement learning or bio-inspired heuristics, our method integrates these components to balance local adaptation with global exploration. This hybridization addresses the premature convergence and limited memory in prior methods. The proposed hybrid approach, named QL-DBO, optimizes the efficiency of the UAV swarm in terms of energy utilization, coverage rate, and target discovery. The simulation results corroborate the superiority of our proposed method over existing methods in terms of these key performance metrics.',
    href: 'https://ieeexplore.ieee.org/abstract/document/11193854',
    journal: 'IEEE Communications Letters',
    volumeIssue: 'Volume 29, Issue 12',
  },
]

export default researchData
