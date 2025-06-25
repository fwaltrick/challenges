interface User {
  username: string
  status: 'online' | 'offline'
  lastActive: number
}

interface UsersByStatus {
  online?: string[]
  offline?: string[]
  away?: string[]
}

function showUsersByStatus(users: User[]): UsersByStatus {
  const result: UsersByStatus = {}

  for (const user of users) {
    let group: 'online' | 'offline' | 'away'

    if (user.status === 'online' && user.lastActive > 10) {
      group = 'away'
    } else {
      group = user.status
    }
    // Initialisierung der Gruppe, falls sie nicht existiert
    if (!result[group]) {
      result[group] = []
    }

    result[group]!.push(user.username)
  }

  return result
}

// Beispiel
const input: User[] = [
  { username: 'David', status: 'offline', lastActive: 10 },
  { username: 'Lucy', status: 'offline', lastActive: 22 },
  { username: 'Jess', status: 'online', lastActive: 22 },
  { username: 'Bob', status: 'online', lastActive: 2 },
]

console.log(showUsersByStatus(input))
