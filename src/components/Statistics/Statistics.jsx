import React from "react";

const Statistics = ({good, neutrel,bad,total}) => (
    <>
        <p>Statistics</p>
    <ul>
          <li>
                    Good: <span>{good}</span>
          </li>
          <li>
                Neutrel: <span>{neutrel}</span>
          </li>
          <li>
                Bad: <span>{bad}</span>
                </li>
            <li>total: <span>{total}</span></li>
                <li>Positive feedback: <span>0%</span></li>
        </ul>
    </>
) 

export default Statistics;