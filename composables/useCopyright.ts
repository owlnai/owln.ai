/**
 * Function that returns the current year based on the Date() object
 * @returns {number} The current year.
 */
export const useCopyright = (): number => {
  const copyright: number = new Date().getFullYear()
  return copyright
}
