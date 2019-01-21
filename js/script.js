// Variable

var nom = "";
var none = "{display:none;}";

var cara = url().indexOf("#");
var cara2 = url().indexOf("?");

if (cara2 == -1){
    ancre = url().substring(cara);
} else {
    var ancre = url().substring(cara,cara2);
    var ancre2 = url().substring(cara2+1);
}

function url() {
    return document.location.href;
}

lien = url()

// Fonctions

function frames(nom,href) {
    //alert(nom)
    if (href == "yes") {   
        window.location.href="#frames?"+nom;
    }
    document.getElementById("style-infos").innerHTML = '.infos'+none;
    document.getElementById("style-accueil").innerHTML = '.accueil'+none;
    document.getElementById("style-frames").innerHTML = '.';
    document.getElementById("frames").innerHTML = '<iframe id="ifrm" src="' + nom + '"height="30%" width="90%"frameborder="0"></iframe>';
    switch(nom) {
        case 'Fake%20News%201.5%20(dieu).html':
            document.getElementById("ifrm").style.height = "180%";
            break;
        case 'Fake%20news%203%20Cl%C3%A9ment.html':
            document.getElementById("ifrm").style.height = "150%";
            document.getElementById("ifrm").style.width = "100%"
            break;
        case 'Fake%20News%201.2%20(Dieu).html':
            document.getElementById("ifrm").style.height = "150%";
            break;
        case 'Fake%20news%202%20(Eva).html':
            document.getElementById("ifrm").style.height = "2200px";
            document.getElementById("ifrm").style.width = "100%"
            break;
        case 'Fake%20News%201%20(DIEU).html':
            document.getElementById("ifrm").style.height = "720%";
            break;
        case 'Fake%20news%201.3%20(dieu).html':
            document.getElementById("ifrm").style.height = "220%";
            break;
        case 'Fake%20News%201.4%20(toujours%20dieu).html':
            document.getElementById("ifrm").style.height = "350%";
            break;
        case 'Fake%20news%202.3%20(Eva).html':
            document.getElementById("ifrm").style.height = "210%";
            break;
        case 'Fake%20news%203.2%20Cl%C3%A9ment.html':
            document.getElementById("ifrm").style.height = "100%";
            break;
        case 'Fake%20news%202.2%20(Eva).html':
            document.getElementById("ifrm").style.height = "145%";
            break;
        case 'Fake%20News%202.4%20(Eva).html':
            document.getElementById("ifrm").style.height = "140%";
            break;
        case 'Fake%20news%203.1%20Cl%C3%A9ment.html':
            document.getElementById("ifrm").style.height = "120%";
            break;
    };
};

function accueil() {
    document.getElementById("style-infos").innerHTML = '.infos'+none;
    document.getElementById("style-frames").innerHTML = '#frames'+none;
    document.getElementById("style-accueil").innerHTML = '.';
};

function infos() {
    document.getElementById("style-accueil").innerHTML = '.accueil'+none;
    document.getElementById("style-frames").innerHTML = '#frames'+none;
    document.getElementById("style-infos").innerHTML = '.';
}

/*
function partage() {
    if (document.getElementById("style-partage").innerHTML == "") {
        document.getElementById("style-partage").innerHTML = ".group{display:none}";
    } else
    document.getElementById("style-partage").innerHTML = "";
}
*/

function copier(lien,message) {
    document.getElementById("partage_lien").innerHTML = '<input class="input-partage" id="input-partage" type="text" value="'+lien+'">';
    document.getElementById("input-partage").select();
    document.execCommand('copy');
    document.getElementById("partage_lien").innerHTML = "";
    Materialize.toast(message, 4000, 'rounded');
};

function link(lien,mode) {
    window.open(lien,mode);
}
function popup(lien) {
    window.open(lien,"", "toolbar:no")
}

function contact() {
    if (document.getElementById("name").value == "") {
        alert("Vous n'avez pas donner de nom")
    } else if (document.getElementById("email").value == "") {
        alert("Vous n'avez pas donner d'email")
    } else if (document.getElementById("subject").value == "") {
        alert("Vous n'avez pas donner de sujet")
    } else if (document.getElementById("message").value == "") {
        alert("Vous n'avez pas donner de message")
    } else {
        Materialize.toast(document.getElementById("name").value+" , message envoyé !", 4000, 'rounded')
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
    }
}

function image(image,yes_no) {
    switch (yes_no) {
        case "yes":
            document.getElementById('galerie').style.display = "block";
            document.getElementById('style-body').innerHTML = ".body{overflow: hidden;}";
            document.getElementById("image").innerHTML = '<img onclick=\'copier("'+image+'","URL copié !")\' class="icon button-source" style="width:30px" src="img/copie.png"><img src="'+image+'" alt="'+image+'">'
            break;
        case "no":
            document.getElementById('galerie').style.display = "none";
            document.getElementById('style-body').innerHTML = "";
            break;
    }
}

// Execution au chargement

window.onload = function() {
    if (ancre == "#accueil") {
        accueil();
    }
    if (ancre == "#infos") {
        infos();
    }
    if (ancre == "#frames") {
        frames(ancre2);
    }
};

// Toujours en cour

window.onpopstate = function() {window.location.reload()};
