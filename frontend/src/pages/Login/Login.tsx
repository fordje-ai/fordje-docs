import React, { FormEvent, useEffect, useState } from 'react'
import { useSession } from '@/hooks'
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

function initialFormValues() {
  return {
    email: '',
    password: ''
  }
}

function Login() {
  const [values, setValues] = useState(initialFormValues)
  const [loginRequestStatus, setLoginRequestStatus] = useState('success')
  const { signIn } = useSession()

  const users = [
    { name: 'Admin', email: 'admin@site.com', password: 'password@123' },
    { name: 'Client', email: 'client@site.com', password: 'password@123' }
  ]

  function handleUserChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const user = event.target.value
    setValues(JSON.parse(user))
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setValues({
      ...values,
      [name]: value
    })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    setLoginRequestStatus('loading')

    try {
      await signIn(values)
    } catch (error) {
      /**
       * an error handler can be added here
       */
    } finally {
      setLoginRequestStatus('success')
    }
  }

  useEffect(() => {
    // clean the function to prevent memory leak
    return () => setLoginRequestStatus('success')
  }, [])

  return (
    <Container maxWidth="sm" sx={{flexGrow: 1}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Fordje Login
      </Typography>
      <form noValidate onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel id="select-user-label">Select User</InputLabel>
          <Select
            labelId="select-user-label"
            id="select-user"
            label="Select User"
            onChange={handleUserChange}
          >
            {users.map((user) => (
              <MenuItem key={user.email} value={JSON.stringify(user)}>{user.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          value={values.email}
          disabled={loginRequestStatus === 'loading'}
          onChange={handleChange}
          required
        />        
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={values.password}
          disabled={loginRequestStatus === 'loading'}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loginRequestStatus === 'loading'}>
          {loginRequestStatus === 'loading' ? 'Loading...' : 'Submit'}
        </Button>
      </form>
    </Container>
  )
}

export default Login
