import { Outlet, Navigate } from 'react-router-dom'
import { getUserIndex, hasPermission, isTokenExpired } from '../utils'

const PrivateRoutes = ({
  necessaryPermissions
}: {
  necessaryPermissions: string[]
}) => {
  const tokenExpired: boolean = isTokenExpired()
  const hasPermissionResult: boolean = hasPermission(necessaryPermissions)

  const userIndex = getUserIndex()

  return !tokenExpired ? (
    hasPermissionResult ? (
      <Outlet />
    ) : (
      <Navigate to={userIndex} />
    )
  ) : (
    <Navigate to="/login" />
  )
}

export default PrivateRoutes
