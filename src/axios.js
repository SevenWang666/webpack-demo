const axios=require('axios')

axios.get('/api/info').then(res=>{
    console.log(res);
})