
export default function Tile({img,children,title,imgdes}) {
    return (
        <section>
            <img src={img} alt={imgdes}/>
            <h2>
                {title}
            </h2>
            {children}
        </section>

    );
}



