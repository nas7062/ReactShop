import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {
  const error = useRouteError()
  return (
    <main>
      <h2>NotFound</h2>
      <p>
        {error.status === 404 ? '요청한 페이지를 찾을 수 없습니다' : '잠시 후 재 실행 해주세요'}
      </p>
    </main>
  )
}

export default NotFound
