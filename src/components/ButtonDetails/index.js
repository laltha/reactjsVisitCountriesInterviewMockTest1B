import './index.css'

const ButtonDetails = props => {
  const {buttonDetails, handleClickImageShowId} = props
  const {id, name, isVisited} = buttonDetails

  const buttonText = isVisited ? <p>Visited</p> : 'Visit'
  const buttonColor = isVisited ? 'grey-color' : 'blue-color'

  const onClickButton = () => {
    handleClickImageShowId(id)
  }

  return (
    <li className="list-style">
      <div className="list-item">
        <p>{name}</p>
        <button className={buttonColor} onClick={onClickButton}>
          {buttonText}
        </button>
      </div>
    </li>
  )
}

export default ButtonDetails
