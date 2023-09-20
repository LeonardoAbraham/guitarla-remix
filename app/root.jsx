

export default function App() {
    return (
        <h1>Desde App</h1>
    )
}

function Document({children}){
    return (
        <html lang="es">
            <head>
                <title>GuitarLA - Remix</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}