import './index.css'

const ImageDetails = props => {
  const {imageDetails, removeItemId} = props
  const {id, name, imageUrl} = imageDetails

  const onClickRemove = () => {
    removeItemId(id)
  }

  return (
    <li className="image-list">
      <img src={imageUrl} alt="thumbnail" className="images" />
      <div className="remove-button">
        <p className="paragraph">{name}</p>
        <button onClick={onClickRemove}>Remove</button>
      </div>
    </li>
  )
}

export default ImageDetails
