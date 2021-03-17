//I started to practice algorithm and this is my first practice
//insertion sort

let arr=[4,5,6,2,3,0,7,09,3434,2545,3]

for(var j=0; j<=arr.length; j++)
{
for(var i=0; i<=arr.length; i++)
{
    if(arr[j]<=arr[i]){
        let temp;
        temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
    }
}
}

console.log('answer:', arr);