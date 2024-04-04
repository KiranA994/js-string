//  write a program to find number count from the given array

arr = [10,20,50,20,30,80,10,20,70,50,20,10];

obj = {};

arr.map(element => 
    element in obj ? obj[element]+=1 : obj[element]=1  
);

console.log(obj);

