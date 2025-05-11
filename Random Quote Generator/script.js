console.log("hello world");
let url = 'https://api.quotable.io/random'
let Quote = document.querySelector(".quote")
let data;
console.log(Quote);
let author = document.querySelector(".author")

const getQuote = async ()=>{
    try {
       let response = await fetch(url)
       if(response.ok)
       {
     data = await response.json()
        console.log(data);
        Quote.textContent = data.content
        author.textContent = data.author
       }
       else
       {
        console.log("an Error Occured", error);
       }
        
    } catch (error) {
        console.log("Error Occured ",error);
    }
}
function Tweet()
{
    window.open("https://twitter.com/intent/tweet?text=" + data.content+ "--------by"+data.author,"tweet Window" , "width-600 height-300")


}
getQuote()