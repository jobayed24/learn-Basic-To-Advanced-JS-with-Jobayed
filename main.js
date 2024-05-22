
function seccessFullCallback(result){
  console.log(`audio file ready at url: ${result}`)
}
function failurCallback(error){
  console.error(`error generating audio file: ${error}`)
}
///callback system
createAudioFileAsync(audiSetting,seccessFullCallback,failurCallback)
/// promis and asynchronous behavior

createAudioFileAsync(audioSetting).then(successfullCallback,failurCallback)