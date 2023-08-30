import React, { useEffect, } from 'react'
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import useWorkoutsContext from '../hooks/useWorkoutsContext';

// components

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext();


    // const [workouts, setWorkouts] = useState(null); // setWorkouts(json) //this remove because we use hook

    useEffect(()=> {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json();

            if(response.ok) {
                // setWorkouts(json) //this remove because we use hook
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchWorkouts();
    }, [dispatch])

  return (
   <div className='home'>
    <div className='workouts'>
        {workouts && workouts.map((workout) => (
           <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
    </div>
    <WorkoutForm />
   </div>
  )
}

export default Home