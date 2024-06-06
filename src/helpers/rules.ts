export default {
  required: (value: string) => !!value || 'Required.',
  email: (value: string) => /.[^\n\r@\u2028\u2029]*@.+\..+/.test(value) || 'E-mail must be valid.',
  min: (len: number) => (v: string) => v.length >= len || 'Min 8 characters',
  match: (pw: string) => (v: string) => v === pw || 'Passwords must match',
}
