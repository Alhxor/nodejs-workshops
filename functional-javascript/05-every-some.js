function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function isGood(user) {
            return goodUsers.some(good => good.id === user.id)
        })
    };
}

module.exports = checkUsersValid
