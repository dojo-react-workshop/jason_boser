'use strict'
const http = axios;

$(document).ready(() => {

    //can't use => functionality or 'this' isn't assigned properly
    //$('form').on('submit',function(event){...})
    //$('form').on('submit',null,function(event){...})
    $('#add_name_form').on('submit',function(event){
        event.preventDefault();
        const dataForServer = $(this).serialize();

        // we control the callback function
        // axios library is promise based and http calls return promises
        let addPromise = http({
            url:'/submit',
            method:'post',
            data: dataForServer
        });

        addPromise
            .then(function(response){
                let htmlTags = buildNamelistHTML(response.data.names);
                $('#namelist').html(htmlTags);
                $('input[type="text"]').val("");
            })
            .catch(function(err){
                $('#namelist').append("<p>error adding a name</p><br>");
            });
    });

    //delete a name from the list
    $('#namelist').on('click','.delete_name',function(response){
        const dataForServer = "index=" + $(this).parent().attr('data-id');

        $.ajax({
            url:'/delete',
            method:'post',
            data: dataForServer,
            success: function(response){
                let htmlTags = buildNamelistHTML(response.names);
                $('#namelist').html(htmlTags);
            }
        });
    });

    //make name field editable when clicked
    $('#namelist').on('click','p',function(response){
        let name = $(this).text();
        let index = $(this).parent().attr('data-id');
        $(this).parent().html(getHTMLForTextbox(name,index));
    });

    //update a name in the list
    $('#namelist').on('click','.update_name',function(response){
        const parent = $(this).parent();
        const dataForServer = $(this).parent().serialize() +
            "&index=" + $(this).parent().attr('data-id');

        let updatePromise = http({
            url:'/update',
            method:'post',
            data: dataForServer
        });

        updatePromise
            .then(function(response){
                const data = response.data;
                let htmlTags =  getHTMLForNameUpdate(data.name,data.id);
                parent.html(htmlTags);
            })
            .catch(function(err){
                parent.html("<p>error adding a name</p><br>");
            });
    });

    function buildNamelistHTML(names){
        let htmlTags = "";
        for(let i=0; i<names.length; i++){
            htmlTags += getHTMLForName(names[i],i);
        }
        return htmlTags;
    }

    //create the div for a name and trashcan/delete
    function getHTMLForName(name,id){
        let htmlTag = 
            "<div data-id='" + id + "'>" +
            getHTMLForNameUpdate(name,id) +
            "</div>";
        return htmlTag;
    }

    //create the HTML inside a name div, for updates or new names
    function getHTMLForNameUpdate(name,id){
        let htmlTag = 
            "<p>" + name + "</p>" +
            "<img class='delete_name' src='./../images/trash.png'></img>";
        return htmlTag;
    }

    //create the editable field for input
    function getHTMLForTextbox(name,index){
        let htmlTag = 
            "<form action='/update' method='post' data-id='" + index + "'>" +
            "<input type='text' name='name' value='" + name + "'>" + 
            "<img class='update_name' src='./../images/plus.png'</img>" +
            "</form>";
        return htmlTag;
    }

})