var layout_content = document.querySelector('layout_content_box');
var linear= document.querySelector('button.linear');
var keyword= document.querySelector('keyword');
var mindmap= document.querySelector('mindmap');
var network= document.querySelector('network');
var herringbone= document.querySelector('herringbone');
var three_column= document.querySelector('three_column');

function change_linear(){
  document.querySelector('.layout_content_box').innerHTML
    = '<img src="images/linear.png" alt="linear notetaking"><p>Taking notes in a linear or sequential fashion is probably the most common way of laying out your notes. A wide left-hand margin is used so that you can add material to your notes at a later date.</p>'
}

function change_keyword(){
  document.querySelector('.layout_content_box').innerHTML
    = '<img src="images/keyword.png" alt="keyword notetaking"><p>Keyword tree is another structure to follow when taking notes.</p>';
}

function change_mindmap(){
  document.querySelector('.layout_content_box').innerHTML
    = '<img src="images/mindmap.png" alt="mindmap"><p> Mind maps are extremely useful ways of organising ideas. However, you are restricted to using key words. This requires you to be concise but it can be difficult if there is a large bulk of information and it cannot easily be condensed. </p>';
}

function change_network(){
  document.querySelector('.layout_content_box').innerHTML
    = '<img src="images/network.gif" alt="network style"><p> Network structure basically makes use of a slash pattern to organise ideas. It is especially useful if you are trying to map out the ideas in a debate or controversy. It enable opposing ideas to be mapped e.g. pros/cons, costs/benefits, advantages/disadvantages, and so on. </p>';
}

function change_herringbone(){
  document.querySelector('.layout_content_box').innerHTML
    = '<img src="images/herringbone.gif" alt="herringbone technique"><p> The herringbone technique, so-named because it resembles a fish skeleton, is useful for analysing a single idea. You ask of the main idea Who?, What?, When?, Where?, Why?, and How? In so doing you are able to represent the key idea and aspects of its supporting data. </p>';
}

function change_three_column(){
  document.querySelector('.layout_content_box').innerHTML
    = '<img src="images/3column.png" alt="3 column notetaking"><p>In the first column, write the main subjects or topics from the text; In the second column, write significant details you learned from reading the text,from research or discussion. In the third column, jot down opinions, observations, thoughts, etc.</p>';
}

function expandMainSection() {
  document.querySelector(".dropdown_mainSection").classList.toggle("active");
  document.getElementById("arrow1").classList.toggle("rotated");
}

function expandPage() {
  document.querySelector(".dropdown_page").classList.toggle("active");
  document.getElementById("arrow2").classList.toggle("rotated");
}

function expandsubSection() {
  document.querySelector(".dropdown_subSection").classList.toggle("active");
  document.getElementById("arrow3").classList.toggle("rotated");
}

function toggleSidebar() {
  document.getElementById("mobile_nav_bar").classList.toggle("active");
}
// Yufan Sun: I tried to use eventlistener instead of onclick here but it doesnt work... so finally inorder to show the functionality i use onclick.

//linear.addEventListener("click",change_linear());
//keyword.addEventListener("click",change_keyword());
//mindmap.addEventListener("click",change_mindmap());
//network.addEventListener("click",change_network());
//herringbone.addEventListener("click",change_herringbone());
//three_column.addEventListener("click",change_three_column());
