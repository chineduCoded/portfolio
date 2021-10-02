export const sizes = {
    // 
    
    sm: 20,
    md: 30,
    lg: 45,
    xl: 60
}

export const devices = (key) => {
    return style  => `@media (min-width: ${sizes[key]}em) { ${style} }`
}