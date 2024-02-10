

export default function Product({label,img,title,price,imgdes}) {
    return (
        <article>
            <span>{label}</span>
            <img src={img} alt={imgdes}/>
            <p>{title}</p>
            <h4>{price}</h4>
        </article>

    );
}

