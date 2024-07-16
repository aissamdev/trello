export const getCards = async () => {
  try {
    const response = await fetch('https://trello-server-theta.vercel.app/api/card')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching cards:', error)
  }
}
