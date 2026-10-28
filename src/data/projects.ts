export type ResearchProject = {
  id: string
  name: string
  subtitle: string
  description: string
  status: string
  tags: string[]
  link?: string
  featured?: boolean
}

export const projects: ResearchProject[] = [
  {
    id: 'recaf',
    name: 'ReCAF',
    subtitle: 'Cross-layer reliability analysis for ReRAM accelerators',
    description: 'A research framework for understanding how hardware faults propagate across execution layers and affect application-level behavior. Detailed results will be shared when available.',
    status: 'Research · Manuscript submitted',
    tags: ['ReRAM', 'Reliability', 'Architecture'],
    featured: true,
  },
  {
    id: 'llm-pim',
    name: 'LLM × PIM Exploration',
    subtitle: 'Memory-efficient inference on heterogeneous systems',
    description: 'Exploring the interplay among long-context inference, KV-cache movement, memory bandwidth and compute placement in GPU–PIM heterogeneous architectures.',
    status: 'Research direction · Ongoing',
    tags: ['LLM Inference', 'PIM', 'KV Cache'],
    featured: true,
  },
]
