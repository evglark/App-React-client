/**
 * Enum for color theme
 */
const enum ETheme {
    LIGHT = 'theme-light',
    DARK = 'theme-dark',
}

export const changeColorTheme = (): void => {
    const themeIsLight: boolean = document.body.classList.contains(ETheme.LIGHT);
    document.body.className = themeIsLight ? ETheme.DARK : ETheme.LIGHT;
};
