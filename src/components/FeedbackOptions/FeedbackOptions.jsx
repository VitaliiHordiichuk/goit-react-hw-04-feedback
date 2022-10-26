import React from "react";

const FeedbackOptions = ({onGoodStatistics, onNeutrelStatistics, onBadStatistics}) => (
    <>
           <button type="button" onClick={onGoodStatistics}>
          Good
        </button>
        <button type="button" onClick={onNeutrelStatistics}>
          Neutrel
        </button>
        <button type="button" onClick={onBadStatistics}>
          Bad
        </button>
 </>
);

export default FeedbackOptions;