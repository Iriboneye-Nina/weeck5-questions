function getSleepHours(day) {
    switch (day) {
      case 'monday':
        return 7;
      case 'tuesday':
        return 6;;
      case 'wednesday':
        return 8; 
      case 'thursday':
        return 7; ;
      case 'friday':
        return 6;
      case 'saturday':
        return 9; ;
      case 'sunday':
        return 8;
      default:
        return 0; 
    }
  }
  
  
  const sleepHours = getSleepHours('monday');
  console.log(`Hours of sleep on Monday: ${sleepHours}`);