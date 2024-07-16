export const getBoards = async () => {
  try {
    const response = await fetch('https://trello-server-theta.vercel.app/api/board')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching boards:', error)
  }
}
