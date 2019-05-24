function getShortMessages(messages) {
    return messages.map(obj => obj.message).filter(str => str.length < 50)
}

module.exports = getShortMessages
