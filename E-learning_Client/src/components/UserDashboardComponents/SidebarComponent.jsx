function SidebarComponent() {
  return (
    <div className="w-76 h-screen text-info p-4 z-20">
      <ul className="menu bg-primary text-info text-2xl rounded-box w-full h-full">
        <li className="flex justify-center items-center hover:bg-secondary">
          <a >Item 1</a>
        </li>
        <li className="flex justify-center items-center hover:bg-secondary">
          <a>Item 2</a>
        </li>
        <li className="flex justify-center items-center hover:bg-secondary">
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  )
}
export default SidebarComponent