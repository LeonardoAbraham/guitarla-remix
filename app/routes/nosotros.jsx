import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta(){
    return [
        {
            title: 'GuitarLA - Sobre Nosotros'
        },
        {
            property: "og:title",
            content: "GuitarLA - Sobre Nosotros",
        },
        {
            name: "description",
            content: "Venta de guitarras, blog de música",
        },
    ]
}

export function links(){
    return [
        {
            rel:'stylesheet',
            href:styles
        },
        {
            rel:'preload',
            href:imagen,
            as:'image'
        }
    ]
}

function Nosotros(){
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="Imagen sobre nosotros" />

                <div>
                    <p>
                        Ut eu mi placerat, tempor mi vitae, accumsan metus. Sed tortor massa, aliquam a sem in, vulputate ullamcorper turpis. 
                        Curabitur vestibulum pretium sem consectetur dapibus. Donec gravida ultricies accumsan. Vestibulum id porttitor ipsum. 
                        In hac habitasse platea dictumst. Sed tempor velit consequat elit fermentum, eget posuere tellus congue. 
                        Phasellus gravida posuere efficitur. Sed posuere hendrerit enim sed condimentum. Maecenas aliquet ornare nulla a dignissim. 
                        Ut vulputate, risus in pulvinar accumsan, nulla nulla ornare sapien, in eleifend lectus lectus vitae eros. 
                        In egestas elit quis luctus viverra. Morbi gravida sapien arcu, vel tempor quam faucibus sit amet. 
                        Aliquam tincidunt ornare massa vitae lobortis. Cras quis placerat arcu.
                    </p>
                    <p>
                        Fusce luctus, augue et consequat porttitor, erat orci ullamcorper elit, et vehicula justo sapien ac neque. 
                        Maecenas ante velit, consectetur in suscipit sed, tempus eleifend felis. Sed tempus, nunc at suscipit sagittis, 
                        lectus tellus consectetur urna, in molestie ligula diam nec enim. Curabitur mollis et quam id tincidunt. 
                        Vestibulum commodo arcu lobortis diam hendrerit condimentum. Fusce eleifend arcu nec massa tempus tincidunt. 
                        Ut vestibulum ut erat quis fermentum. Nam dui mauris, consequat non vehicula quis, ornare eu magna. Phasellus vel luctus purus, 
                        a vestibulum mi.
                    </p>
                    
                </div>
            </div>
        </main>
    )
}

export default Nosotros