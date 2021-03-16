//I started to practice algorithm and this is my first practice
//Bubble sort

let arr=[4,5,6,2,3,0,7,09,3434,2545,3]

for(let j=0; j<arr.length;j++){
for(let i=0; i<arr.length-j; i++)
{
  if(arr[i]>=arr[i+1])
  {
    let temp;
    temp=arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=temp
  }
}
}

console.log('answer:', arr);