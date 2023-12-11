import { JwtPayload, jwtDecode } from 'jwt-decode'
import { ModulePermission, moduleRoutes } from './Routes'

export function codeMask(code: string) {
  if (code.length === 11) {
    return code
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  if (code.length === 14) {
    return code
      .replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
      .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2') // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura os dois últimos 2 números, com um - antes dos dois números
  }

  return ''
}

export function formatUUID(inputString: string) {
  if (inputString.length === 36) {
    const startChars = inputString.slice(0, 5)
    const endChars = inputString.slice(-5)
    return `${startChars}...${endChars}`
  } else {
    return inputString
  }
}

export function formatPhoneNumber(phoneNumber: string) {
  if (phoneNumber.length === 10) {
    return phoneNumber
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3') // Formato para telefone (10 dígitos)
  } else if (phoneNumber.length === 11) {
    return phoneNumber
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3') // Formato para celular (11 dígitos)
  } else {
    return phoneNumber
  }
}

export function amountMask(amount: number) {
  return `R$ ${amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
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
  permissions: string[]
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
