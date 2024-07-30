export const deleteCard = async ({ id }) => {
  try {
    await fetch(`https://trello-server-gules.vercel.app/api/card/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
  } catch (error) {
    console.log(error)
  }
}
