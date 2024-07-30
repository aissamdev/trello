export const deleteBoard = async ({ id }) => {
  try {
    await fetch(`https://trello-server-gules.vercel.app/api/board/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
  } catch (error) {
    console.log(error)
  }
}
