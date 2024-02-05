fetch('json/cards.json')
.then(function(response){
  return response.json();
})
.then(function(cards){
  let placeholder = document.querySelector('.items_container');
  let out = "";
  for (let card of cards){
    out +=`
      <div class="items_box">
       <div class="items_text"> 🤩 FAV${card.text_1}</div>
       <hr>
       <div class="items_text"> 🤮 LEAST${card.text_2}</div>
      </div>
    `;
  }
  
  placeholder.innerHTML = `<div class="items_box">
      <div class="items_text"> 🏆 HOBBY : Coding, Animation</div>
    </div>
    <div class="items_box">
      <div class="items_text"> 📅 D.O.B : 27/10/2010</div>
    </div>
    <div class="items_box">
      <div class="items_text"> 👬 FRIENDS COUNT : 3</div>
    </div>
    <div class="items_box">
      <div class="items_text"> 🎯 GOAL : Software Engineer</div>
    </div>` + out;
  
})
