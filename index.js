fetch("https://emoji-api.com/emojis?access_key=b5ed0239e4673dc0cffe15d25a1f4f9d43fd87ed")
    .then(data => data.json())
    .then(emojiData => {  
        for(let i=0; i<=20;i++)
     {   document.querySelector(".e"+i).innerHTML =`<td >${emojiData[i].character}</td><td>${emojiData[i].slug}</td> ` ;
    }});