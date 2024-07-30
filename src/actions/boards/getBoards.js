export const getBoards = async () => {
  try {
    const response = await fetch('https://trello-server-gules.vercel.app/api/board', {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching boards:', error)
  }
}
