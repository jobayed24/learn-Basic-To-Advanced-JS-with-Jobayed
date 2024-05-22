//what is actually promis do?

/// promis return object with attach you to callback it will not pass the callback function

///promis  return 2 major thing one is if the event successfull or another is failur callback with result


// asume i will create a file in server with asynchronously


//here is below my function
function successfullCallback(result){
  console.log(`successfully create on server: ${result}`)
}

function failurCallback(error){
  console.error( `there was an error when file was : ${error}`)
}
createFilyAynch(soundSetting,successfullCallback,failurCallback)