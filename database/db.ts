import mongoose from "mongoose"

/**
 * 0 = disconnected
 * 1 = connected
 * 3 = connecting
 * 4 = disconnecting
 */

const connection = {
  isConnected: 0
}

export const connect = async() => {

  if(connection.isConnected) return

  if(mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState
    if(connection.isConnected === 1) return
  }

  await mongoose.connect(process.env.MONGO_URL || '')
  connection.isConnected = 1
}

export const disconnect = async() => {
  if(process.env.NODE_ENV === 'development') return
  if(connection.isConnected === 0) return
  await mongoose.disconnect()
}