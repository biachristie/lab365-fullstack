function trocarTema() {
    const body = document.body

    const isLightTheme = body.classList.contains('light-theme')

    body.classList.toggle('light-theme', !isLightTheme)
}