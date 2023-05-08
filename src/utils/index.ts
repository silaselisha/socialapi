export const EMAIL_TOKEN_EXPIRES_IN_MIN = 10
export const EMAIL_TOKEN_EXPIRES_IN_MLS = EMAIL_TOKEN_EXPIRES_IN_MIN * 60 * 1000

export const generateToken = (): number => {
    return Math.floor(10000000 + Math.random() * 90000000)
}
