let user = [];

$().ready(()=> {
    $("refresh").on("click", () =>{
    refresh();
    console.log("mthis is the message");
    
});
refresh();
});



const refresh = () =>{

$.getJSON("http://localhost:14154/api/users/1")
    .then((res) => {
    console.debug(res);
    display(res);
    })
    .fail((err) => {console.error(err);
    })

}

const display = (user) =>{
    $("dId").text(user.id);
    $("dName").text(`${user.firstname} ${user.lastname}`)
    $("dUserame").text(user.username);
    $("dPhone").text(user.phone);
    $("dEmail").text(user.email);
    $("dReviewer").text(user.isReviewer ? "Yes" : "No");
    $("dAdmin").text(user.isAdmin ? "Yes" : "No");
}