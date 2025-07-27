// export const Product = (props)=> {
export const Product = ({ item })=> {
    // console.log(props);
    // console.log(props.item.brand);
    console.log(item);

    return (
        <div className="product">
            {/* <div className="product_brand">{props.item.brand}</div> */}
            <div className="product_brand">{item.brand}</div>
            <h1 className="product_title">{item.title}</h1>
            <div className="product_description">{item.description}</div>

        </div>
    )
}