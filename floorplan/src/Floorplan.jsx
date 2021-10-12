
import './Floorplan.css';
import Kitchen from './components/Kitchen';
import LivingRoom from './components/LivingRoom';
import Bath from './components/Bath';
import Bedroom from './components/Bedroom';
import Fixture from './components/Fixture';

function FloorPlan() {
  return (
    <div className="FloorPlan">
      <Bedroom num={1} />
      <div className="Kitchen">
        <Kitchen />
      </div>
      <Fixture name={'Oven'} />
      <Fixture name={'Sink'} />
      <div className="Bath-full">
        <Bath />
      </div>
      <Bedroom num={2} />
      <div className="Living-Room">
        <LivingRoom />
      </div>
      <div className="Bath-half">
        <Bath />
      </div>
      <Bedroom num={3} />
    </div>
  );
}

export default FloorPlan;
