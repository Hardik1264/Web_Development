let score = [0, 0];
      let roll = document.querySelector(".btn_roll");
      let start = document.querySelector(".btn_new");
      let turn = document.querySelector(".turn");
      let count = 0;
      let ct = 0;

         start.addEventListener('click',()=>{
              turn.textContent="Player1's Turn";
              score[0]=0;
              score[1]=0;
              ct=0;
              count=0;

         })

      roll.addEventListener("click", () => {
        let num = Math.floor(Math.random() * 6) + 1;
        score[count++] = num;

        if (count == 1) {
          turn.textContent = "Player2's Turn";
          const firstDiceImage = "dice" + num + ".png";
          document
            .querySelectorAll("img")[0]
            .setAttribute("src", firstDiceImage);
        } else if (count == 2) {
          const secondDiceImage = "dice" + num + ".png";
          document
            .querySelectorAll("img")[1]
            .setAttribute("src", secondDiceImage);
        }

        ct++;
        chk();
      });
      function chk() {
        if (ct == 2) {
          if (score[0] > score[1]) {
            turn.textContent = "Win Player1";

          } else if (score[0] == score[1]) {
            turn.textContent = "Tie";
          } else {
            turn.textContent = "Win Player2";
           
          }
        }
       
              
      }
