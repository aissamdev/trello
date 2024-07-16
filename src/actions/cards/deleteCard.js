export const deleteCard = async (id) => {
  try {
    const response = await fetch(`https://trello-server-theta.vercel.app/api/card/${id}`, {
      method: 'DELETE'
    })
    await response.json()
  } catch (error) {
    console.log(error)
  }
}
