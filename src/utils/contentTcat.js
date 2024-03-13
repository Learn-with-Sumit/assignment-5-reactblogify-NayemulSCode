export const truncateContent = (content, maxLength) => {
  if (content.length <= maxLength) {
    return content
  } else {
    return content.slice(0, maxLength) + "..."
  }
}
