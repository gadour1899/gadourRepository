// $('button').click(function(){
//     $("p").hide(1000);
// });

function MakeJersey(src,name,price,newPrice){
	var jersey={}
	// animals.id =id
	jersey.src=src
	jersey.name=name
	jersey.price=price
	jersey.newPrice=newPrice
	jersey.myDescription=myDescription
	return jersey
}
var myDescription=function(){
$('#' + this.name).textContent=this.name
$('#'+ this.price).textContent=this.price
$('#'+ this.newPrice).textContent=this.newPrice

}
var jersey1 = MakeJersey("argentine.jpg","ARGENTINA 22 HOME JERSEY","Price : 160DT" ,"140DT")
var jersey2 = MakeJersey("brazil.jpg","BRAZIL 22 HOME JERSEY","Price : 160DT","140DT")
var jersey3 = MakeJersey("germany.jpg","Germany 22 HOME JERSEY","Price : 150DT","130DT")
var jersey4 = MakeJersey("spain.jpg","SPAIN 22 HOME JERSEY","Price : 160DT","140DT" )
var jersey5 = MakeJersey("angleterre.jpg","ENGLAND 22 HOME JERSEY","Price : 120DT","100DT")
var jersey6 = MakeJersey("france.jpg","FRANCE 22 HOME JERSEY","Price : 140DT","120DT")
var jersey7 = MakeJersey("netherland.jpg","NETHERLAND 22 HOME JERSEY","Price : 100DT","80DT")
var jersey8 = MakeJersey("italie.jpg","ITALY 22 HOME JERSEY","140DT","120DT")
var jersey9 = MakeJersey("tunisia.png","TUNISIA 22 HOME JERSEY","Price : 100DT","80DT")

var jerseyArray = [jersey1,jersey2,jersey3,jersey4,jersey5,jersey6,jersey7,jersey8,jersey9]

function myJersey(){
jerseyArray.map(function(x,i){
var div=$("<div class='jersey'></div>")
var img=$(`<img class="image" src=${x.src} />`)

var button1=$(`<button> SHOW ME </button>`)
div.attr('id',i)
var p1=$(`<p class= "y">${x.name}</p>`)
var p2=$(`<p class= "z">${x.price}</p>`)
var p3=$(`<p class= "w">${x.newPrice}</p>`)
$(div).append(img,button1,p1,p2,p3)
p1.hide()
p2.hide()
p3.hide()
$("#myDiv").append(div)

}) 
for (var i=0;i<jerseyArray.length;i++){
	$("#"+i+" button").click(function(event){
var index = event.target.parentElement.id*1
$("#"+index+" p").toggle()

		
	})
}
}


myJersey()
