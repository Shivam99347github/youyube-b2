 async function fetchData(){
    console.log("async function exicuted")
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log("async function complete",data)
}