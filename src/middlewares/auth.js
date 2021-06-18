export default async ({ store, next }) => {
  // If the user is already logged in
  if (!store.getters['auth/loggedIn']) {
    // Redirect to the home page instead
    next({ name: 'login' })
  } else {
    // Continue to the login page
    next()
  }
}

export function noAuthMiddleware({ store, next }) {
  if (store.getters['auth/loggedIn']) {
    next({ path: '/' })
  } else {
    next()
  }
}