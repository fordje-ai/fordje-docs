const ROOT_PATH = '/'
const LOGIN_PATH = '/login'
const REGISTER_PATH = '/register'
const REVIEW_PATH = '/review'
const RESULTS_PATH = '/results'
const SEARCH_PATH = '/search'
const USERS_PATH = '/users'
const USER_PATH = '/users/:id'

const paths = {
  ROOT_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  REVIEW_PATH,
  RESULTS_PATH,
  SEARCH_PATH,
  USERS_PATH,
  USER_PATH
} as const

export default paths
