export const patchBoard = async ({ id, input }) => {
  try {
    await fetch(`https://trello-server-gules.vercel.app/api/board/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify(input)
    })
  } catch (error) {
    console.error('Error patching board:', error)
  }
}
