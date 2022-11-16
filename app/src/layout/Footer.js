function Footer() {
    return <footer>
        <div className='copyright'>© Movies {new Date().getFullYear()}</div>
        <nav>
            <ul>
                <li><a href='#'>Главная</a></li>
                <li><a href='#'>Фильмы</a></li>
                <li><a href='#'>Категории</a></li>
            </ul>
        </nav>
    </footer>
}

export default Footer