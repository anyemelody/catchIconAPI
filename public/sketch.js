function setup() {
  // put setup code here
  createCanvas(500,500);
}

function draw() {
  // put drawing code here
  background(50);
  ellipse(mouseX,mouseY, 40,40);
}


function keyPressed(){
  console.log("lalallala");
    jQuery.ajax({
        url : '/myaction',
        dataType : 'json',
        success : function(res) {
          console.log('success');
          console.log(res.data)
          renderToHTML(res.data.icons)
        }
    })
}

function renderToHTML(icons){
  url=icons[0].attribution_preview_url;
  $('body').append('    <img src="' + url + '">');
}