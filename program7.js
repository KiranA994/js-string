//  write  aprogram to find the first recursive letter

pattern = 'ABCBACCBAA'

characters = Array.from(pattern);

obj = {};

for(let char of characters){

    if(char in obj){
        console.log(`first recursive letter is - ${char}`);
        break;
    }

    else{
        obj[char] = 1;
    }

}