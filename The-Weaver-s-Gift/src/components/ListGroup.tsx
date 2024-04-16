let gods = ["God 1", "God 2", "God 3"]
// gods =[]

function ListGroup() {
    return (
        <>
            <h1>Gods</h1>
            {gods.length === 0 && <p>Gods are missing</p>}
            <ul className="list-group">
                {gods.map((god) => (
                    <li
                        className="list-group-item"
                        key={god}  onClick={()=> console.log("Clicked")} >{god}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListGroup;