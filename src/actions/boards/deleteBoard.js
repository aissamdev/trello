export const deleteBoard = async (id) => {
  try {
    const response = await fetch(`https://trello-server-theta.vercel.app/api/board/${id}`, {
      method: 'DELETE'
    })
    await response.json()
  } catch (error) {
    console.log(error)
  }
}
