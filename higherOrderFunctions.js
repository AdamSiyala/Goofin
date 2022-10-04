const companies= [
    {name:'company 1', category: 'Finance', start:1981, end: 2008},
    {name:'company 2', category: 'Retail', start:1961, end: 2007},
    {name:'company 3', category: 'Auto', start:1934, end: 2011},
    {name:'company 4', category: 'Finance', start:1989, end: 2014},
    {name:'company 5', category: 'Auto', start:2002, end: 2010},
    {name:'company 6', category: 'Tech', start:1997, end: 1999},
]
const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32]



// for Each
    let forEachCompany = () => {
        companies.forEach(function(company) {
            console.log(company)
        });
    }
 

//filter

//filter Ages
    const canDrink = ages.filter(age => age >=21);
//filter finance companies 
const financeCompanies = companies.filter(company => company.category === 'Finance');
//filter 80s companies
const eightiesCompanies =  companies.filter(company => company.start >= 1980 && company.start <1990)
// filter companies that lasted 10+ years
const tenYears = companies.filter(company => (company.end - company.start >= 10))


//map
//array of company names

// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`
// })

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
//Take each item in age array, square it. second .map takes the square rooted number, and doubles it.
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);


//sort
// sort companies by start year

// const sortedCompanies = companies.sort(function(c1,c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// })


const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1))

//sort ages

const sortAges = ages.sort((a,b) => a - b);



//reduce

//add all ages together

// let ageSum = 0;
// for(let i =0; i< ages.length; i++) {
//     ageSum += ages[i]
// }

// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// },0)

const ageSum = ages.reduce((total,age) => total + age)

// Get total years for all companies 

// const totalYears = companies.reduce(function(total,company) {
//     return total + (company.end - company.start)
// },0)

const totalYears = companies.reduce((total,company ) => 
    total + (company.end - company.start),0)




//Combine Methods

const combined = ages
    .map(age => age *2)
    .filter(age => age > 40)
    .sort((a,b) => a-b)
    .reduce((total,age) => total + age) 
    


console.log(combined)

