import { BASE_URL } from "./base_url"
import commonApi from "./commonApi"


export const uploadVideos=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/allVideos`,data)
}
export const getVideos=async()=>{
    return await commonApi("GET",`${BASE_URL}/allVideos`,"")
} 
export const deleteVideo=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/allVideos/${id}`,{})
} 
export const addCategory=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/categories`, data)
}
export const getCategories=async()=>{
    return await commonApi("GET",`${BASE_URL}/categories`,"")
}
export const deleteCategory=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/categories/${id}`,{})
}
export const addHistory =async(data)=>{
    return await commonApi("POST",`${BASE_URL}/history`, data)
}
export const getHistory =async()=>{
    return await commonApi("GET",`${BASE_URL}/history`)
}
export const deleteHistory=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/history/${id}`,{})
}
export const getSpecificVideo=async(id)=>{
    return await commonApi("GET",`${BASE_URL}/allVideos/${id}`,"")
}
export const updatecategory=async(data,id)=>{
    return await commonApi("PUT",`${BASE_URL}/categories/${id}`,data)
}
