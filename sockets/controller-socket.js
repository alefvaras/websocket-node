

const socketController=(socket)=>{
        console.log('cliente conectado',socket.id)

        socket.on('disconnect',()=>{
            console.log('cliente desconectado',socket.id)
        })

        socket.on('enviar-mensaje',(payload,callback)=>{
            const id=45254;
            callback({id,fecha:new Date().getTime()})
        //  this.io.emit('enviar-mensaje',payload)
    //   socket.emit('enviar-mensaje',payload)
      socket. broadcast.emit('enviar-mensaje',payload)
        })
    }


module.exports={
    socketController
}