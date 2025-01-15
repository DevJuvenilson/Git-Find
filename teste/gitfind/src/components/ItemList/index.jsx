import './styles.css'

export default function ItemList({ title, description, finalURL }) {
  return (
    <div className='item-list'>
        <strong><a href={`https://github.com/${finalURL}`} target="_blank" rel="noopener noreferrer">{title}</a></strong>
        <p>{description}</p>
        <hr></hr>
    </div>
  )
}
