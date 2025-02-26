const eventslogger = require('events')
const { EventEmitter } = require('stream')
const fs = require('fs')
const path = require('path')

const events = new EventEmitter()

events.on('aloou', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if(err) throw err
    })
})

function log(message){
    events.emit('aloou', message)

}
 module.exports = log
