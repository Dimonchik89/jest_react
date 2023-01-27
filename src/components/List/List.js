
const List = (props) => {
    const {items = []} = props

    if(!items.length) return null;

    return (
        <>
            <h1>hi</h1>
            <ul className="list">
                {
                    items.map(el => (
                        <li key={el} data-testid="item">{el}</li>
                    ))
                }
            </ul>
        </>

    )
}
export default List;