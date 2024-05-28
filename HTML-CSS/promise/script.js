const categories=[
    {
        id:0,
        name:"Bilgisayar",
        detail:"Bilgisayar açıklama"
    },
    {
        id:1,
        name:"Telefon",
        detail:"Telefon açıklama"
    },
    {
        id:2,
        name:"Beyaz Eşya",
        detail:"Beyaz Eşya açıklama"
    }
]
const products=[
    {
        id:0,
        name:"Iphone 6",
        categoryId:1    
    },
    {
        id:1,
        name:"Macbook",
        categoryId:0   
    },
    {
        id:2,
        name:"Buzdolabı",
        categoryId:2    
    },{
        id:3,
        name:"Redmi",
        categoryId:1    
    }
]
var array=[];

const getCategories=()=>{
    const ids=[];
    categories.forEach(category=>ids.push(category.id))

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(ids)

        },3000)

    })
}

const getProductById=(id)=>{
    const product=[];
    var time;
    if(id==0) time=2000;
    if(id==1) time=3000;
    if(id==2) time=5000;
       
        return new Promise((res,rej)=>{
            products.forEach(prd=>{
                if(prd.categoryId==id){
                    product.push(prd);
                }
            })
            setTimeout(()=>{
                res(product)
                
            },time)
        })
}

getCategories()
.then(res=>{
    res.forEach(r=>{
        getProductById(r).then(ans=>{
            array.push(ans)   
        })
    }) 
    return array
}).then(arr=>{
    console.log(arr)
})

// getCategories().then(res=>{
//     Promise.all([getProductById(res[0]),getProductById(res[1]),getProductById(res[2])])
//     .then(res=>console.log(res))
// })