import { toast } from 'react-toastify';

const getLocalData = () => {
  const getData = localStorage.getItem("read-books");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
};

const saveLocalData = (id) => {

  const getStoredData = getLocalData();
  const isExist = getStoredData.find(getId => getId == id);
  if (isExist) {
   
    return toast.error('Books Already Added to ReadList!')
  }
  getStoredData.push(id);
  localStorage.setItem('read-books',JSON.stringify(getStoredData))
  return toast.success('Successfully Books Added to ReadList')
}
  
const getWishData =() =>{
  const getData = localStorage.getItem("wish-list");
  if (getData) {
    return JSON.parse(getData)
  }
  return [];
}

const saveWishData = (id) =>{

const localData = getLocalData();
const isRead = localData.find(Id => Id == id);
const getStoredDataWish = getWishData();
const isExist = getStoredDataWish.find(getItem => getItem == id);
if (!isRead) {
  if (!isExist) {
    getStoredDataWish.push(id)
    localStorage.setItem('wish-list',JSON.stringify(getStoredDataWish))
    return toast.success('Successfully Books Added to Wishlist')
  }
return toast.error('Books Already Added to Wishlist.')
  
}
return toast('👏 You have already read this book !')

}



export { getLocalData, saveLocalData, getWishData, saveWishData }
