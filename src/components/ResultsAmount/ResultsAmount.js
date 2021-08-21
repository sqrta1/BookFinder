import './ResultsAmount.css';

function ResultsAmount(props) {
    return (
        <div className='results'>
            {!props.amount ? 'Make a search to find a book that suits your preferences.' : `Found ${props.amount} results` }
        </div>
    )
}

export default ResultsAmount;