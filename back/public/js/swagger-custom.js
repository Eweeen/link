var svgMoon = `
<svg class="moon" width="20" height="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 312.812 312.812" style="enable-background:new 0 0 312.812 312.812;" xml:space="preserve">
<g><g>
		<path d="M305.2,178.159c-3.2-0.8-6.4,0-9.2,2c-10.4,8.8-22.4,16-35.6,20.8c-12.4,4.8-26,7.2-40.4,7.2c-32.4,0-62-13.2-83.2-34.4
			c-21.2-21.2-34.4-50.8-34.4-83.2c0-13.6,2.4-26.8,6.4-38.8c4.4-12.8,10.8-24.4,19.2-34.4c3.6-4.4,2.8-10.8-1.6-14.4
			c-2.8-2-6-2.8-9.2-2c-34,9.2-63.6,29.6-84.8,56.8c-20.4,26.8-32.4,60-32.4,96c0,43.6,17.6,83.2,46.4,112s68,46.4,112,46.4
			c36.8,0,70.8-12.8,98-34c27.6-21.6,47.6-52.4,56-87.6C314,184.959,310.8,179.359,305.2,178.159z"/></g></g>
<g></g><g></g><g></g><g></g><g></g><g></g>
<g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;

var svgSun = `<svg class="sun" width="25" height="25" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="45.16px" height="45.16px" viewBox="0 0 45.16 45.16" style="enable-background:new 0 0 45.16 45.16;" xml:space="preserve"
>
<g>
<g>
 <path d="M22.58,11.269c-6.237,0-11.311,5.075-11.311,11.312s5.074,11.312,11.311,11.312c6.236,0,11.311-5.074,11.311-11.312
   S28.816,11.269,22.58,11.269z"/>
 <g>
   <g>
     <path d="M22.58,7.944c-1.219,0-2.207-0.988-2.207-2.206V2.207C20.373,0.988,21.361,0,22.58,0c1.219,0,2.207,0.988,2.207,2.207
       v3.531C24.787,6.956,23.798,7.944,22.58,7.944z"/>
   </g>
   <g>
     <path d="M22.58,37.215c-1.219,0-2.207,0.988-2.207,2.207v3.53c0,1.22,0.988,2.208,2.207,2.208c1.219,0,2.207-0.988,2.207-2.208
       v-3.53C24.787,38.203,23.798,37.215,22.58,37.215z"/>
   </g>
   <g>
     <path d="M32.928,12.231c-0.861-0.862-0.861-2.259,0-3.121l2.497-2.497c0.861-0.861,2.259-0.861,3.121,0
       c0.862,0.862,0.862,2.26,0,3.121l-2.497,2.497C35.188,13.093,33.791,13.093,32.928,12.231z"/>
   </g>
   <g>
     <path d="M12.231,32.93c-0.862-0.863-2.259-0.863-3.121,0l-2.497,2.496c-0.861,0.861-0.862,2.26,0,3.121
       c0.862,0.861,2.26,0.861,3.121,0l2.497-2.498C13.093,35.188,13.093,33.79,12.231,32.93z"/>
   </g>
   <g>
     <path d="M37.215,22.58c0-1.219,0.988-2.207,2.207-2.207h3.531c1.219,0,2.207,0.988,2.207,2.207c0,1.219-0.988,2.206-2.207,2.206
       h-3.531C38.203,24.786,37.215,23.799,37.215,22.58z"/>
   </g>
   <g>
     <path d="M7.944,22.58c0-1.219-0.988-2.207-2.207-2.207h-3.53C0.988,20.373,0,21.361,0,22.58c0,1.219,0.988,2.206,2.207,2.206
       h3.531C6.956,24.786,7.944,23.799,7.944,22.58z"/>
   </g>
   <g>
     <path d="M32.928,32.93c0.862-0.861,2.26-0.861,3.121,0l2.497,2.497c0.862,0.86,0.862,2.259,0,3.12s-2.259,0.861-3.121,0
       l-2.497-2.497C32.066,35.188,32.066,33.791,32.928,32.93z"/>
   </g>
   <g>
     <path d="M12.231,12.231c0.862-0.862,0.862-2.259,0-3.121L9.734,6.614c-0.862-0.862-2.259-0.862-3.121,0
       c-0.862,0.861-0.862,2.259,0,3.12l2.497,2.497C9.972,13.094,11.369,13.094,12.231,12.231z"/>
   </g></g></g></g><g></g><g></g><g></g><g></g>
<g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;

jQuery(function ($) {
  var info = $('div.info');
  var div = $(`<div class="toggle-container"></div>`);
  var div2 = $(`<div class="toggle-dark"><label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label></div>`);
  $(div).append(svgSun);
  $(div).append(div2);
  $(div).append(svgMoon);
  var parent = $(info).parent('div');
  $(parent).toggleClass('flex');
  $(parent).append(div);
  if(!document.cookie) {
    document.cookie = 'theme=light';
  } else {
    checkCookie();
  }

  $('input:checkbox').click(function () {
    toggleCookieTheme();
    $(this).toggleClass('active');
    $('body').toggleClass('dark');
    $('.swagger-ui').toggleClass('dark');
  });
});

function toggleCookieTheme() {
  var cookie = document.cookie;
  var arrayCookie = cookie.split("=");
  if(arrayCookie[1] === 'dark') {
    document.cookie = 'theme=light';
  } else {
    document.cookie = 'theme=dark';
  }
}

function checkCookie() {
  var cookie = document.cookie;
  var arrayCookie = cookie.split("=");
  if(arrayCookie[1] === 'dark') {
    $('input:checkbox').prop( "checked", true );
    $('input:checkbox').toggleClass('active');
    $('body').toggleClass('dark');
    $('.swagger-ui').toggleClass('dark');
  }
}
