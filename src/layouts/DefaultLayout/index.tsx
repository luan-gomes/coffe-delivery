import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <div className="App">
      <h1>Hello, Coffe Delivery</h1>
      {<Outlet />}
    </div>
  )
}
