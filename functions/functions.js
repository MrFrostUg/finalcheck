function countElFromLocalStorage(key) {
    const storedData = localStorage.getItem(key);
  
    if (storedData) {
      const elements = JSON.parse(storedData);
      return elements.length;
    } else {
      return 0;
    }
  }
  

  const classCount = countElFromLocalStorage('classes');
  const teachersCount = countElFromLocalStorage('teachers');
  const studentsCount = countElFromLocalStorage('students');
  
  export { classCount, teachersCount, studentsCount };