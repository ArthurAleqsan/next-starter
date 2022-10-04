/**
 * Routes for all available project pages
 */
export enum RoutePathsEnum {
  // Auth pages
  AUTH_RESET_PASSWORD = '/auth/reset-password',
  AUTH_VERIFY_EMAIL = '/auth/verify-email',
  AUTH_NEW_PASSWORD = '/auth/new-password',
  AUTH_SIGN_UP = '/auth/sign-up',
  AUTH_SIGN_IN = '/auth/sign-in',
  // Main pages
  MAIN_DASHBOARD = '/main/dashboard',
  MAIN_EVENTS = '/main/events',
  MAIN_MAINTENANCE = '/main/maintenance',
  MAIN_TASKS = '/main/tasks',
  MAIN_CARS = '/main/cars',
  MAIN_NEW_CAR = '/main/new-car',
  MAIN_CAR_PARTS = '/main/car-parts',
  MAIN_NEW_CAR_PART = '/main/new-car-part',
  MAIN_PROFILE = '/main/profile',
  MAIN_NOTIFICATION = '/main/notification',
  // Root page
  HOME = '/',
}

/**
 * Routes for auth and not auth redirects
 */
export const NOT_AUTH_REDIRECT = RoutePathsEnum.AUTH_SIGN_IN;
export const AUTH_REDIRECT = RoutePathsEnum.MAIN_DASHBOARD;
