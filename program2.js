// str = 'good';

// console.log(str);

// console.log(str.trim());


// w a prog to print vowels in the given string

word = 'good evening all';

vowel = ['a','e','i','o','u','A','E','I','O','U'];

characters = word.toLowerCase().split('');
p = [];
for(let char of characters){
    if(vowel.includes(char) && !p.includes(char)){
        p.push(char);
    }
}

console.log(p);


// Method 2 - Array.from()

b=[]
w = Array.from(word).filter(item=> (vowel.includes(item) && !b.includes(item)) && b.push(item)) 
console.log(w);
