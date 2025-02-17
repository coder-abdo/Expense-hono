/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const AuthenticatedLazyImport = createFileRoute('/_authenticated')()
const AuthenticatedIndexLazyImport = createFileRoute('/_authenticated/')()
const AuthenticatedProfileLazyImport = createFileRoute(
  '/_authenticated/profile',
)()
const AuthenticatedExpensesLazyImport = createFileRoute(
  '/_authenticated/expenses',
)()
const AuthenticatedCreateExpenseLazyImport = createFileRoute(
  '/_authenticated/create-expense',
)()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const AuthenticatedLazyRoute = AuthenticatedLazyImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/_authenticated.lazy').then((d) => d.Route),
)

const AuthenticatedIndexLazyRoute = AuthenticatedIndexLazyImport.update({
  path: '/',
  getParentRoute: () => AuthenticatedLazyRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/index.lazy').then((d) => d.Route),
)

const AuthenticatedProfileLazyRoute = AuthenticatedProfileLazyImport.update({
  path: '/profile',
  getParentRoute: () => AuthenticatedLazyRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/profile.lazy').then((d) => d.Route),
)

const AuthenticatedExpensesLazyRoute = AuthenticatedExpensesLazyImport.update({
  path: '/expenses',
  getParentRoute: () => AuthenticatedLazyRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/expenses.lazy').then((d) => d.Route),
)

const AuthenticatedCreateExpenseLazyRoute =
  AuthenticatedCreateExpenseLazyImport.update({
    path: '/create-expense',
    getParentRoute: () => AuthenticatedLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/create-expense.lazy').then((d) => d.Route),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      preLoaderRoute: typeof AuthenticatedLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/create-expense': {
      preLoaderRoute: typeof AuthenticatedCreateExpenseLazyImport
      parentRoute: typeof AuthenticatedLazyImport
    }
    '/_authenticated/expenses': {
      preLoaderRoute: typeof AuthenticatedExpensesLazyImport
      parentRoute: typeof AuthenticatedLazyImport
    }
    '/_authenticated/profile': {
      preLoaderRoute: typeof AuthenticatedProfileLazyImport
      parentRoute: typeof AuthenticatedLazyImport
    }
    '/_authenticated/': {
      preLoaderRoute: typeof AuthenticatedIndexLazyImport
      parentRoute: typeof AuthenticatedLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  AuthenticatedLazyRoute.addChildren([
    AuthenticatedCreateExpenseLazyRoute,
    AuthenticatedExpensesLazyRoute,
    AuthenticatedProfileLazyRoute,
    AuthenticatedIndexLazyRoute,
  ]),
  AboutLazyRoute,
])

/* prettier-ignore-end */
