let stream;
async function openCamera(){
    stream = await navigator.mediaDevices.getUserMedia({video:true});
    video.srcObject = stream; 
}

 function closeCamera(){
    if(stream){
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        video.srcObject = null; 
    }
}
