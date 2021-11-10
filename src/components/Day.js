import Time from './Time';

export default function Day(props) {
    const { day, schedule, color } = props
    return (
        <div className="column is-narrow">
            <article className={`message ${ color }`}>
                <div className="message-header" id="sectioncontainer">
                    <p>{day}</p>
                </div>
                <div className="message-body" >
                    <div className="control" >
                        {schedule.map((hour, id) =>
                            <Time id={`${day}_${id}`} data={hour} name={day} />
                        )}
                    </div>
                </div>
            </article>
        </div>
    )
}