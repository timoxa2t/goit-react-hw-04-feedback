
import PropTypes from "prop-types"

export default function FeedbackOptions({options, onLeaveFeedback}){

    return (

        <div>
            <button onClick={onLeaveFeedback}>{options.GOOD}</button>
            <button onClick={onLeaveFeedback}>{options.NEUTERAL}</button>
            <button onClick={onLeaveFeedback}>{options.BAD}</button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func
}