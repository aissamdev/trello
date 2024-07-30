export const postCard = async ({ input }) => {
  try {
    await fetch('https://trello-server-gules.vercel.app/api/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify(input)
    })
  } catch (error) {
    console.error('Error sending card:', error)
  }
}
