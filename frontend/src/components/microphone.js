import React from 'react';
import Button from "@material-ui/core/Button";

function Microphone(props){
    let mediaRecorder
    function Start(){
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            console.log({ stream })


            
                // Further code goes here
                if (!MediaRecorder.isTypeSupported('audio/webm'))
                return alert('Browser not supported')
                mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' })  
                const socket = new WebSocket('wss://api.deepgram.com/v1/listen', [
                'token',
                'c7c2fd3806242c99b1f5da9e1087e846164edde7',
                ]) 
                socket.onopen = () => {
                console.log({ event: 'onopen' }) 
                document.querySelector('#status').textContent = 'Connected'
                mediaRecorder.addEventListener('dataavailable', async (event) => {
                if (event.data.size > 0 && socket.readyState == 1) {
                    socket.send(event.data)
                }
                })
                mediaRecorder.start(250)
                }
        
                socket.onmessage = (message) => {
                //console.log({ event: 'onmessage', message })
                //document.querySelector('#transcript').textContent += transcript + ' '
                const received = JSON.parse(message.data)
                const transcript = received.channel.alternatives[0].transcript
                if (transcript && received.is_final) {
                console.log(received)
                document.querySelector('#transcript').textContent += transcript + ' '
                }
        
                }
        
                socket.onclose = () => {
                console.log({ event: 'onclose' })
                }
        
                socket.onerror = (error) => {
                console.log({ event: 'onerror', error })
                }
            })

    }
    function Stop(){
        mediaRecorder.stream.getAudioTracks().forEach(function(track){track.stop();});
    }
    
    return(
        //use class name
        <div>
        <Button color="primary" variant="contained" xs={4} onClick = {Start}>Start</Button>
        <Button color="primary" variant="contained" xs={4} onClick = {Stop}>Stop</Button>
        </div>
    )

}

export default Microphone;
