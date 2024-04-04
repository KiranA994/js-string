text = 'hai hello all hello world all';

//  w a prog to find the word count in the given text

// output = {hai:1,hello:2,all:2,world:1}

str = text.split(' ');

obj = {};

for(let x of str){
    if(x in obj){
        obj[x] += 1;
    }
    else{
        obj[x] = 1;
    }
}

console.log(obj);


console.log('----------------------------');

wc = {};
text.split(' ').forEach(element => 
    element in wc ? wc[element]+=1 : wc[element] =1);
console.log(wc);
