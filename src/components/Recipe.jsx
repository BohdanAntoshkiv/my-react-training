import { BsAlarm, BsPieChart, BsBarChartLine } from 'react-icons/bs';
export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <div>
          <BsAlarm />
          <p>{time} mins</p>
        </div>
        <div>
          <BsPieChart />
          <p>{servings} servings</p>
        </div>
        <div>
          <BsBarChartLine />
          <p>{calories} calories</p>
        </div>
      </div>
    </div>
  );
};
