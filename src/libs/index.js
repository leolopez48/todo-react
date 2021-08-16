export const changeColorsTheme = (theme) => {
    const root = document.querySelector(':root')

    if (theme === 'dark') {
        root.style.setProperty('--background-color', '#FAFCFF')
        root.style.setProperty('--color-text', '#2F3137')
        root.style.setProperty('--background-task', '#FAFCFF')
        root.style.setProperty('--dark-red', '#e2bfdd')
        return;
    }

    root.style.setProperty('--background-color', '#2F3137')
    root.style.setProperty('--color-text', '#fff')
    root.style.setProperty('--background-task', '#383B42')
    root.style.setProperty('--dark-red', '#3F373E')
}