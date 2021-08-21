import './BookItem.css';

export function BookItem(props) {
    return (
        <div className='bookitem' onClick={props.onClick}>
            <img src={props.img} alt='book'></img>
            <div className='type ml20'>{props.type}</div>
            <div className='bookname ml20'>{props.name}</div>
            <div className='authorname ml20'>{props.author}</div>
        </div>
    )
}