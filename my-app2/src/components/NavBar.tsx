function NavBar() {
  return (
    <div>
        <nav className="bg-black">
            <ul className="flex gap-10 text-2xl text-white pt-4">
                <li>
                    <a href="/">home</a>
                </li>
                <li>
                    <a href="/Bootcam">Bootcam</a>
                </li>
                <li>
                    <a href="/login">login</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar