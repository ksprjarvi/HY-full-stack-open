/* eslint-disable react/prop-types */
import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
    return (
        <div>
            <table>
                <tbody>
                    <StatisticLine name={'good'} title={props.good} />
                    <StatisticLine name={'neutral'} title={props.neutral} />
                    <StatisticLine name={'bad'} title={props.bad} />
                    <StatisticLine name={'all'} title={props.all} />
                    <StatisticLine name={'average'} title={props.average} />
                    <StatisticLine name={'positives'} title={props.positives} />
                </tbody>
            </table>
            
        </div>
    )
}

export default Statistics;