// DATA STORAGE/GRABBING THE DATA
let dataStorage = {}


const fetchData = async () => {

    try {
      const response = await fetch('/data/data.json');
      const newData = await response.json();
      console.log(newData);
      dataStorage = newData;

    } catch (error) {
      console.error('Error:', error);
    }   
}

  fetchData();
  
// GETTING DAILY TIMES

const dailyTimeFrame = document.querySelector('.daily');

dailyTimeFrame.addEventListener('click', () => {

  if (dataStorage) {
    const dailyWorkTime = dataStorage[0].timeframes.daily.current;
    const dailyPlayTime = dataStorage[1].timeframes.daily.current;
    const dailyStudyTime = dataStorage[2].timeframes.daily.current;
    const dailyExerciseTime = dataStorage[3].timeframes.daily.current;
    const dailySocialTime = dataStorage[4].timeframes.daily.current;
    const dailySelfCareTime = dataStorage[5].timeframes.daily.current;

      document.querySelector('.work-time').innerHTML = dailyWorkTime;
      document.querySelector('.play-time').innerHTML = dailyPlayTime
      document.querySelector('.study-time').innerHTML = dailyStudyTime
      document.querySelector('.exercise-time').innerHTML = dailyExerciseTime
      document.querySelector('.social-time').innerHTML = dailySocialTime
      document.querySelector('.self-care-time').innerHTML = dailySelfCareTime
  }
})

// GETTING WEEKLY TIMES

const weeklyTimeFrame = document.querySelector('.weekly');

weeklyTimeFrame.addEventListener('click', () => {

  if (dataStorage) {
    const weeklyWorkTime = dataStorage[0].timeframes.weekly.current;
    const weeklyPlayTime = dataStorage[1].timeframes.weekly.current;
    const weeklyStudyTime = dataStorage[2].timeframes.weekly.current;
    const weeklyExerciseTime = dataStorage[3].timeframes.weekly.current;
    const weeklySocialTime = dataStorage[4].timeframes.weekly.current;
    const weeklySelfCareTime = dataStorage[5].timeframes.weekly.current;

      document.querySelector('.work-time').innerHTML = weeklyWorkTime;
      document.querySelector('.play-time').innerHTML = weeklyPlayTime
      document.querySelector('.study-time').innerHTML = weeklyStudyTime
      document.querySelector('.exercise-time').innerHTML = weeklyExerciseTime
      document.querySelector('.social-time').innerHTML = weeklySocialTime
      document.querySelector('.self-care-time').innerHTML = weeklySelfCareTime
  }
})

// GETTING MONTHLY TIMES

const monthlyTimeFrame = document.querySelector('.monthly');

monthlyTimeFrame.addEventListener('click', () => {

  if (dataStorage) {
    const monthlyWorkTime = dataStorage[0].timeframes.monthly.current;
    const monthlyPlayTime = dataStorage[1].timeframes.monthly.current;
    const monthlyStudyTime = dataStorage[2].timeframes.monthly.current;
    const monthlyExerciseTime = dataStorage[3].timeframes.monthly.current;
    const monthlySocialTime = dataStorage[4].timeframes.monthly.current;
    const monthlySelfCareTime = dataStorage[5].timeframes.monthly.current;

      document.querySelector('.work-time').innerHTML = monthlyWorkTime;
      document.querySelector('.play-time').innerHTML = monthlyPlayTime
      document.querySelector('.study-time').innerHTML = monthlyStudyTime
      document.querySelector('.exercise-time').innerHTML = monthlyExerciseTime
      document.querySelector('.social-time').innerHTML = monthlySocialTime
      document.querySelector('.self-care-time').innerHTML = monthlySelfCareTime
  }
})



