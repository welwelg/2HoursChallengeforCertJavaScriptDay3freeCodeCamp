let count = 0;

function cardCounter(card) {
  if (card >= 2 && card <= 6) {
    count += 1;
  } else if (card >= 7 && card <= 9) {
    
  } else {
    count -= 1;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
