export const register = async ({ data }) => {
  try {
    console.log(data)
    await fetch('https://trello-server-gules.vercel.app/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.error('Error signing up:', error)
  }
}
