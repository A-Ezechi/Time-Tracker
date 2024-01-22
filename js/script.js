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
  
// ASSIGNING THE VALUES

