$.ajax({
    url:"http://localhost:14154/api/users/" + user.id,
    method: "PUT",
    data:JSON.stringify(user1),
    contentType: "application/json"
})
    .then((res) =>{
        console.log(res);
    })
    .fail((err) =>{
        console.error(err);
    });

 $.ajax({
        url:"http://localhost:14154/api/users",
        method: "POST",
        data:JSON.stringify(user1),
        contentType: "application/json"
    })
        .then((res) =>{
            console.debug(res);
        })
        .fail((err) =>{
            console.error(err);
        });