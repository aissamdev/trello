export const getInfo = async () => {
  try {
    const response = await fetch(`https://trello-server-gules.vercel.app/api/user/${sessionStorage.getItem('id')}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching info:', error)
  }
}
