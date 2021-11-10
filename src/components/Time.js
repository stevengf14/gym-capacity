export default function Time(props) {
    const { id, data, name } = props
    return (
        <div className="board-item" key={id}>
            <label className="radio board-item" >
                <input className="board-item-content" type="radio" name={name}/>
                <span className="pl-2" >{data}</span>
            </label>
        </div>
    )
}