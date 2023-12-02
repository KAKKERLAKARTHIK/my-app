
// async function User_Data(){
//     let details=await fetch("https://jsonplaceholder.typicode.com/users")
//     let Data=await details.json()
// console.log(Data);
// }
// User_Data()


const Data=[{name:"karthik",
image:"https://m.media-amazon.com/images/I/41UC+UCWRFL._AC_UF1000,1000_QL80_.jpg",
age:"25",
mobile:5555555555,
email:"abcd@gmail.com"
},{name:"karthik1",
image:"https://m.media-amazon.com/images/I/41UC+UCWRFL._AC_UF1000,1000_QL80_.jpg",
age:"25",
mobile:5555555555,
email:"abcd@gmail.com"
},{name:"karthik2",
image:"https://m.media-amazon.com/images/I/41UC+UCWRFL._AC_UF1000,1000_QL80_.jpg",
age:"25",
mobile:5555555555,
email:"abcd@gmail.com"
},{name:"karthik3",
image:"https://m.media-amazon.com/images/I/41UC+UCWRFL._AC_UF1000,1000_QL80_.jpg",
age:"25",
mobile:5555555555,
email:"abcd@gmail.com"
}]
 
    

 
 function List() {
  return (
    <>
      {Data.map((val, ind) => {
        return (
          <div key={ind}>
            <h1 >Name:-{val.name}</h1>
            <img width={100}src={val.image}/>
            <h3>Age:- {val.age}</h3>
            <h3> Email:-{val.email}</h3>
            <h3>mobile:-{val.mobile}</h3>
          </div>
        )
      })}
    </>
  )
}
export default List





 


















