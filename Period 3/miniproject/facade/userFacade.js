const testData = [
    {car: "Saab", type: "Mid car"},
    {car: "Volvo", type: "Good car"},
    {car: "BMW", type: "Luxury car"}
];

function addUser(data) {
    //Forget about the Position in this part
    testData.push(data);
}

function getAllUsers() {
    return testData;
}

function findByUserName(username) {
    let searchName = username.req.params.user_name;

    for (let i = 0; i < testData.length; i++) {
        if (testData[i].car === searchName) {
            return testData[i];
        } else {
            return "Sorry no results";
        }
    }
}

module.exports = {
    addUser,
    getAllUsers,
    findByUserName
};


/*

 // Save Note in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });

 */