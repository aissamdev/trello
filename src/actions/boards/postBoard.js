export const postBoard = async ({ input }) => {
  try {
    console.log(input)
    await fetch('https://trello-server-gules.vercel.app/api/board', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify(input)
    })
  } catch (error) {
    console.error('Error sending board:', error)
  }
}
