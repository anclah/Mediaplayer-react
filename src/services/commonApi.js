import axios from 'axios'

const commonApi=async(reqMethod,apiUrl,body)=>{
    const reqConfig={
        method:reqMethod,
        url:apiUrl,
        data:body,
        Headers:{'Content-type':'application/json'}

}
 return await axios(reqConfig).then(res=>{
    return res
 }).catch(err=>{
    return err
 })
}

export default commonApi
