export default function filter(array, param){
    return array.filter(item=>{
        if(item["FORMA PAGTO"]){
          return item["FORMA PAGTO"].includes(param)
        }
    })
}