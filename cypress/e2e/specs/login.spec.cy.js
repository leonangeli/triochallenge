/// <reference types = "cypress" />

import landingPage from "../pages/landing-page"
import loginPage from "../pages/login-page"

describe('Login tests', () => {
  const ln = new loginPage()
  const lp = new landingPage()

  beforeEach(() => {
    ln.navigateLogin()
  })

  it('Successful login with valid credentials', () => {
    ln.setUsername('leonangelitrio')
    ln.setPassword('Leonangeli123!')
    lp.validateSuccessfulLogin()
  })
})