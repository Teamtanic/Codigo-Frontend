import { Outlet, Navigate } from 'react-router-dom'
import { getUserIndex, hasPermission, isTokenExpired } from '../utils'

const PrivateRoutes = ({
  necessaryPermission
}: {
  necessaryPermission: string
}) => {
  let tokenExpired: boolean = isTokenExpired()
  let hasPermissionResult: boolean = hasPermission(necessaryPermission)

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
