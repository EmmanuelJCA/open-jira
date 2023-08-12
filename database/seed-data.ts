interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string
  status: string
  createdAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendiente: Enim aute fugiat mollit quis cupidatat pariatur ad voluptate non non officia.',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      description: 'En-Progreso: Veniam proident occaecat ad pariatur consequat commodo.',
      status: 'in-progress',
      createdAt: Date.now() - 100000000
    },
    {
      description: 'Terminada: Pendiente: Quis enim officia eu nulla.',
      status: 'finished',
      createdAt: Date.now() - 100000
    }
  ]
}
