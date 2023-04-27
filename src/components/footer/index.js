import "./footer.css"

export const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://web.facebook.com/jose.bautista.r/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.instagram.com/jobaro21/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Jose Bautista</strong>
    </footer>
}
