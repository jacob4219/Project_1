$(() => {
    // Cache My Dom Nodes:
    const $form = $('form');

    // Input Form
    $form.on('send', (event) => {
        event.preventDefault();
        console.log($('#input-box').val());
        $(event.currentTarget).trigger('reset');
    })
});

// Input button

const list = [];

$('form').on('send', (event) => {
    console.log($('#input-box').val());

    list.push($('#input-box').val());

    event.preventDefault();
    $(event.currentTarget).trigger('reset');

    render();
});

// Render The To Do List

const render = () => {
    console.log('list: ', list);
    $('#anonTalk').empty();
    list.forEach((item) => {
        $('#anonTalk').append('<li>' + item + '</li>');
        console.log(item + " Was not sent.");
    });

// Render To The Completed List
    $('li').on('click', (event) => {
        $(event.currentTarget).remove('#anonTalk');
        $('#drTalk').prepend(event.currentTarget);

        $(event.currentTarget).css('text-decoration', 'line-through');
        console.log("A Task Has Been Completed!");
        alert("A Task Has Been Completed!");

    })
};

// Added A Task Alert

const addedTask = () => {
    alert("The recipient cannot accept incoming messages.");
    console.log("Unable To Send...");
}

document.getElementById("addTaskBtn").addEventListener("click", addedTask);


//// Popup Window

const el = document.querySelector(".chat");

el.addEventListener('mousedown', mousedown);

function mousedown(e) {
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;
    
    function mousemove(e) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = el.getBoundingClientRect();

        el.style.left = rect.left - newX + "px";
        el.style.top = rect.top - newY + "px";

        prevX = e.clientX;
        prevY = e.clientY;

    }

    function mouseup(){
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);

    }

    const resizers = document.querySelectorAll(".resizer");
    let currentResizer;

    for(let resizer of resizers) {
        resizer.addEventListener('mousedown', mousedown);

        function mousedown(e) {
            currentResizer = e.target;

            let prevX = e.clientX;
            let prevY = e.clientY;

            window.addEventListener('mousemove', mousemove);
            window.addEventListener('mouseup', mouseup);

            function mousemove(e) {

            }

        }
    }
}