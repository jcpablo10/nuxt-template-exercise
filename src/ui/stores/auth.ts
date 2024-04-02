import { Store, Pinia } from 'pinia-class-component'

@Store({
  name: "Auth"
})
class Auth extends Pinia {
  public user: string | null = null
}

export {Auth}