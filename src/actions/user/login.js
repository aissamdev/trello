export const login = async ({ data }) => {
  try {
    const response = await fetch('https://trello-server-gules.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const result = await response.json()

    if (response.ok) {
      sessionStorage.setItem('token', result.token)
      sessionStorage.setItem('id', result.id)
    }

    return result
  } catch (error) {
    console.error('Error loging in:', error)
  }
}
