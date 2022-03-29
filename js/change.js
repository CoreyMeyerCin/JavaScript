let user;
let parms;

$().ready(()=>{
    parms = getUrlParms();
    console.debug("Parms:", parms);
    console.log("Ready!");  
    display(parms.id);

    $("#save").on("click",()=>{
        save();
    })
});
const display = (id) => {
    
    $.getJSON("http://localhost:14154/api/users/" + id)
    .then((res)=> {
        user=res;
        console.debug(res);
        $("#iId").val(user.id);
        $("#iUsername").val(user.username);
        $("#iFirstname").val(user.firstname);
        $("#iLastname").val(user.lastname);
        $("#iPhone").val(user.phone);
        $("#iEmail").val(user.email);
        $("#iReview").prop("checked", user.isReviewer);
        $("#iAdmin").prop("checked", user.isAdmin);
    })
    .fail((err)=> {
        console.error(err);
    })
}
const save =()=>{
    let user1 ={
        id: +$("#iId").val(),
        username: $("#iUsername").val(),
        password: "Train@MAX",
        firstname :$("#iFirstname").val(),
        lastname: $("#iLastname").val(),
        phone: $("#iPhone").val(),
        email: $("#iEmail").val(),
        isReviewer: $("#iReviewer").prop("checked"),
        isAdmin: $("#iAdmin").prop("checked")
    }
    console.debug(user1);
    $.ajax({
        url:"http://localhost:14154/api/users/" + user.id,
        method: "PUT",
        data:JSON.stringify(user1),
        contentType: "application/json"
    })
        .then((res) =>{
            console.log(res);
            document.location.href = "index.html";
        })
        .fail((err) =>{
            console.error(err);
        });
}