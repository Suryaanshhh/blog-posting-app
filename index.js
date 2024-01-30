let count=0;
const post=document.getElementById('PostBlog')
post.addEventListener('click',(event)=>{
    event.preventDefault();


    const imageurl=document.getElementById('image').value;
    const blogTitle=document.getElementById('title').value;
    const BlogDescription=document.getElementById('description').value;

    const BLOG_DETAILS={
        imageurl:imageurl,
        blogTitle:blogTitle,
        BlogDescription:BlogDescription
    }
axios.post('https://crudcrud.com/api/e7bc0343074948a88b392b8960742d4e/BLOGS',BLOG_DETAILS)
.then((response)=>{console.log(response)
    showblog(BLOG_DETAILS)})
.catch((Err)=>console.log(Err))

increase_count()

})

window.addEventListener("DOMContentLoaded", ()=>{
    axios.get('https://crudcrud.com/api/e7bc0343074948a88b392b8960742d4e/BLOGS')
    .then((response)=>{console.log(response)
             for(var i=0;i<response.data.length;i++){
             showblog(response.data[i]);
             }
    })
    .catch((err)=>{console.log(err)}); 
})


function showblog(){

    const imageurl=document.getElementById('image').value;
    const blogTitle=document.getElementById('title').value;
    const BlogDescription=document.getElementById('description').value;

    const image=document.createElement('img');
    image.src=imageurl;
    
    const title=document.createElement('h3');
    title.textContent=blogTitle;

    const description=document.createElement('h6');
    description.textContent=BlogDescription;

    const editBLog=document.createElement('button');
    editBLog.innerText="EDIT";

    const DelBLog=document.createElement('button');
    DelBLog.innerText="DELETE";

    var display=document.getElementById('content');

    display.appendChild(title);
    display.appendChild(image);
    display.appendChild(description);
    display.appendChild(editBLog);
    display.appendChild(DelBLog);

    DelBLog.addEventListener('click',()=>{
        const display=document.getElementById('content');
        display.removeChild(title);
        display.removeChild(image);
        display.removeChild(description);
        display.removeChild(editBLog);
        display.removeChild(DelBLog);

    
    })
          
   }

function increase_count(){
    count++
    const all=document.getElementById('TotalBlogs');
all.innerText=`Your Blogs
Total:${count}`
}
