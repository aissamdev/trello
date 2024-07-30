export const formToJSON = ({ formData }) => {
  const result = {}
  for (const [key, value] of [...formData.entries()]) {
    result[key] = value
  }
  return result
}
