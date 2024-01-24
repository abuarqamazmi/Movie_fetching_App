let input=document.querySelector('input');
let btn=document.querySelector('button');
let list=document.querySelector('#list');

btn.addEventListener('click',function(){
    let searchText=input.value;
    fetchData(searchText);
    input.value='';
});

function fetchData(searchText)
{
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(response){
        manupulateDom(response.data);
    })
}

function manupulateDom(alltheData)
{

    while(list.firstChild)
    {
        list.firstChild.remove();
    }

    for(let data of alltheData)
    {
        let figure=document.createElement('figure');
        figure.innerHTML=`
            <img src=${data.show.image.medium} />
            <h2> Name: ${ data.show.name}</h2>
            <h5> Language: ${ data.show.language}</h5>
        `
        list.appendChild(figure);
    }

}