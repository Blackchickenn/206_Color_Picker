function displayColors(colors){
    console.log(colors)
    
    //printing colors according the amount/count
    let myColorsHtml = colors.map(color =>{
        return `<div class="my-color" style="background-color:${color.value}">${color.value}</div>`
    }).join('')
  
    //creating a divs with displaying a colors
   document.body.innerHTML = `                                                      
   <div class="my-colors">
    ${myColorsHtml}
   </div>
   `

}



    //fetching API for color data
async function getColors(countColor){                                                         
    let response = await fetch (`https://apis.scrimba.com/hexcolors/?count=${countColor}`)
    let data = await response.json()
  
    let colors = data.colors
    displayColors(colors)
}
let countColor = 100
getColors(countColor)