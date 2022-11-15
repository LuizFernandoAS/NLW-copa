function createGame(player1, hour, player2){
  return `<li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira dos ${player1}">
              <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
          </li>`
}

function createCard(date , day, games){
  return `<div class="card">
            <h2>${date}<span>${day}</span></h2>
            <ul>
              ${games}
            </ul>
          </div>`
}

document.getElementById("cards").innerHTML = `
      ${createCard(
        "24/11",
        "quinta",
        createGame("switzerland", "07:00", "cameroon") +
        createGame("portugal", "13:00", "ghana") +
        createGame("brazil", "16:00", "serbia")
      )}
      ${createCard(
        "28/11",
        "segunda",
        createGame("brazil", "13:00", "switzerland")
      )}
      ${createCard("02/12", "sexta", createGame("cameroon", "16:00", "brazil"))}
`