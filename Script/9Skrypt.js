 function calculateAge(birthYear, currentYear) 
{
    var age = currentYear - birthYear;
    console.log('You are either ' + age + ' or ' + (age - 1));
}

calculateAge(1984, 2012);
calculateAge(1988, 2012);
calculateAge(1982, 2012);