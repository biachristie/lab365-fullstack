let users = [];

function createNewUser(req, res) {
    const user = req.body;
    users.push(user);

    if (Object.keys(user).length == 0) {
        return res.status(406).send({"message": "Not enough data to complete request"});
    } else {
        if (user.idade < 21) {
            return res.send({"message": "User is not old enough"});
        } else {
            console.log(`Sent successfully ${JSON.stringify(user)}`);
            return res.status(200).send({"message": "User created successfully"});
        }
    }
};

function deleteUser (req, res) {
    if (!req.params.id) {
        return res.status(406).send({"message": "Not enough data to complete request"});
    }

    let findUser = users.filter((user) => {
        return user.id == req.params.id;
    })

    if(findUser.length != []) {
        return res.status(200).send({"message": "User deleted."});
    } else {
        return res.status(400).send({"message": "User not found."});
    }
};

module.exports = {
    createNewUser,
    deleteUser
}