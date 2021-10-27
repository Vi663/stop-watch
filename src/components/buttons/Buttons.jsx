export function Buttons({ buttons }) {
  return (
    <div className="container">
      <ul className="list-group-horizontal btn-group-lg d-flex justify-content-between">
        {buttons.map((button, idx) => (
          // <li key={idx} className="list-group-item" >
            <button key={idx} type='button' id={button} className="btn btn-outline-secondary" >{button}</button>
          // </li>
        ))}
      </ul>
    </div>
  )
}