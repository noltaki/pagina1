
const $newCard = document.createElement("figure");
const $newImg = document.createElement("img");
const $newFigCaption = document.createElement("figcaption");
const $newFigCaptionText = document.createTextNode("fish");
const $cards = document.querySelector(".cards");

$newImg.setAttribute("src","istockphoto-1757746308-1024x1024.jpg");
$newImg.setAttribute("alt","Fish");
$newImg.setAttribute("width","300");

$newFigCaption.appendChild($newFigCaptionText);
$newCard.appendChild($newImg);
$newCard.appendChild($newFigCaption);
$cards.appendChild($newCard);

//document.write("Separador");

$template = document.getElementById("template-card").content;
$fragment = document.createDocumentFragment();
const fotos = [{
    title: "tec",
    img: "istockphoto-1757746308-1024x1024.jpg"
},{
    title: "anim",
    img: "istockphoto-1757746308-1024x1024.jpg"
}];

fotos.forEach(el => {
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;
    let $clone = document.importNode($template,true);
    $fragment.appendChild($clone);
});
$cards.appendChild($fragment);



