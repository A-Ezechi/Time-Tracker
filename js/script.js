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
  
// GRETTING DAILY TIMES

const dailyTimeFrame = document.querySelector('.daily');

dailyTimeFrame.addEventListener('click', () => {

  if (dataStorage) {
    const dailyWorkTime = dataStorage[0].timeframes.daily.current;

      document.querySelector('.work-time').innerHTML = dailyWorkTime;
      document.querySelector('.play-time').innerHTML = 'Changed'
      document.querySelector('.study-time').innerHTML = 'Changed'
      document.querySelector('.exercise-time').innerHTML = 'Changed'
      document.querySelector('.social-time').innerHTML = 'Changed'
      document.querySelector('.self-care-time').innerHTML = 'Changed'

  }
})

