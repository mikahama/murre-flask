  
function lookupButton(event){
	var lemma = $("#Teksti").val();
	var pos = $("#posSelector option:selected" ).text();
	lookup(lemma, pos);
}

var lookedUpLemma;
function lookup(lemma, pos) {
	lookedUpLemma = lemma;
	$.ajax({
	  type: "POST",
	  url: "api",
	  data: {"text": lemma, "dialect": pos},
	  success: lookupReady
	}).fail(function() {
    $('.error').fadeIn(400).delay(3000).fadeOut(400);
  });
}
$(document).ready(function() {
    $('input').bind('keypress', function(e){
       if(e.keyCode == 13) { e.preventDefault();lookupButton(event); }
    });
});

function lookupReady(data){
	$('body').scrollTop(0);
	var html = "<p class='alert alert-secondary'>" + data["result"] + "</p>"
	$("#resultsTableContainer").html(html);
}


var translations = {"dir": "direct objects", "indir": "indirect objects"}
function _(text){
	if(text in translations){
		return translations[text];
	}else{
		return text;
	}
}
var poses = {"nouns": "noun", "verbs": "verb", "dir": "noun", "indir": "noun", "subjects": "noun"};
function getPos(text){
	if(text in poses){
		return poses[text];
	}else{
		return null;
	}
}