export const getCards = async () => {
  try {
    const response = await fetch('https://trello-server-gules.vercel.app/api/card', {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching cards:', error)
  }
}
