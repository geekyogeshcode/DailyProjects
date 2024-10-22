import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const[products,setProducts]=useState([])
  const[page,setPage]=useState(1)

  useEffect(() =>{
    const fetchProducts=async () =>{

       let res =await fetch('https://dummyjson.com/products?limit=100')
       let data=await res.json()

       if(data && data.products){
         setProducts(data.products)
        }
       console.log(data);
       
    }
    fetchProducts()
  },[])

  const selectPagehandler=(selectedPage) =>{
    if(selectedPage >=1 && selectedPage<=products.length/10 && selectedPage !== page)
    setPage(selectedPage)
  }

  return (
    <>
      <div className="App">
        {
          products.length>0 && <div className="ProductsDiv">
                {
                  products.slice(page*10-10,page*10).map((proItem) =>{
                    return <div className='Products__single' key={proItem.id}>
                      <img src={proItem.thumbnail} alt={proItem.title} />
                      <span>{proItem.title}</span>
                    </div>
                  })
                }
          </div>
        }
        {
          products.length>0 && <div className="pagination">
            <span 
             className={page >1?"":"pagination_disabled"}
             onClick={() => selectPagehandler(page-1)} >Previous</span>
            {
              [...Array(products.length/10)].map((_,i) =>{
                return <span
                    className={page === i+1 ? 'pagination__selected':""} 
                    onClick={() => selectPagehandler(i+1)} key={i}>{i+1}
                </span>
              })
            }
            <span 
              className={page <products.length/10?"":"pagination_disabled"}
             onClick={() => selectPagehandler(page+1)}>Next</span>
          </div>
        }
      </div>
    </>
  )
}

export default App
