export const postCard = async (data) => {
  try {
    await fetch('https://trello-server-theta.vercel.app/api/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.error('Error sending card:', error)
  }
}
