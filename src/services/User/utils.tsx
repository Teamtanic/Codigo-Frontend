import { JwtPayload, jwtDecode } from 'jwt-decode'
import { ModulePermission, moduleRoutes } from '../../Routes'

export function logout() {
  localStorage.removeItem('token')
  window.location.href = '/login'
}

const token = localStorage.getItem('token')
export function getUserPermissions() {
  if (token) {
    try {
      const decodedToken: any = jwtDecode(token)

      //console.log(decodedToken)

      const permissions: string[] = decodedToken.permissions

      return permissions
    } catch (error) {
      console.error('Erro ao decodificar o token:', error)
    }
  } else {
    console.error('Token não encontrado.')
  }
}

export function isTokenExpired() {
  if (!token) {
    return true
  }

  const decodedToken = jwtDecode(token)

  if (typeof decodedToken.exp === 'undefined') {
    return true
  }

  const expirationTimeInSeconds = decodedToken.exp

  const currentTimeInSeconds = Date.now() / 1000

  return expirationTimeInSeconds < currentTimeInSeconds
}

export interface tokenProps extends JwtPayload {
  id: string
  permissions: string[]
  name: string
  email?: string
}

export function hasPermission(requiredPermissions: string[]): boolean {
  const userPermissions: string[] | undefined = getUserPermissions()

  if (userPermissions === undefined) {
    return false
  }

  return requiredPermissions.some(permission =>
    userPermissions.includes(permission)
  )
}

export function getUserIndex(): string {
  if (!token) {
    return '/login'
  }

  const decodedToken: tokenProps = jwtDecode(token)

  console.log(decodedToken)

  const userPermissionString = decodedToken.permissions[0]
  const userPermissionEnum: ModulePermission | undefined =
    ModulePermission[userPermissionString as keyof typeof ModulePermission]

  const userIndex = moduleRoutes[userPermissionEnum]

  return userIndex
}

interface UserData {
  userId: string | undefined
  name: string | undefined
  email?: string | undefined
  permissions: string[]
}

export function getUserData(): UserData | undefined {
  if (!token) {
    console.error('Token não encontrado.')
    return undefined
  }

  try {
    const decodedToken: tokenProps = jwtDecode(token)

    const userData: UserData = {
      userId: decodedToken.id,
      name: decodedToken.name,
      permissions: decodedToken.permissions
    }

    return userData
  } catch (error) {
    console.error('Erro ao decodificar o token:', error)
    return undefined
  }
}

export const checkPermission = (necessaryPermissions: string[]): boolean => {
  const userPermissions = getUserPermissions()
  return necessaryPermissions.some(permission =>
    userPermissions?.includes(permission)
  )
}
