import './BigBookItem.css';

export function BigBookItem(props) {
    return (
        <div>
            { (props.result &&  <div className='bigbookitem' >
                                    <div className='bigbookimage'>
                                        <img src={props.result.volumeInfo.imageLinks.thumbnail} alt='book'></img>
                                    </div>
                                    <div className='bigbookcontent'>
                                        <div className='bigbooktype'>{props.result.volumeInfo.categories}</div>
                                        <div className='bigbookname'>{props.result.volumeInfo.title}</div>
                                        <div className='bigbookauthor'>{props.result.volumeInfo.authors}</div>
                                        <div className='bigbookdescr'>{props.result.volumeInfo.description ? props.result.volumeInfo.description : 'There is no description of this book'}</div>
                                        <button className='myButton' onClick={props.btnClick}>Return</button>
                                    </div>
                                </div>
              )
            }
        </div>
    )
}