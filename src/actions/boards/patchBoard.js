export const patchBoard = async ({ id, data }) => {
  console.log({ id, data })
  try {
    await fetch(`https://trello-server-theta.vercel.app/api/board/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.error('Error patching board:', error)
  }
}
