var info = fetch('http://127.0.0.1:8000/api/nft/ads/')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("ads_output").innerHTML =  '<a href="'+data.ads_url+'" target="_blank"><img src="http://127.0.0.1:8000/'+data.ads_banner+'" height="100" width="1170" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto; width: 100%;"></a>';
    document.getElementById("ads_output1").innerHTML =  '<a href="'+data.ads_url+'" target="_blank"><img src="http://127.0.0.1:8000/'+data.ads_banner+'" height="100" width="1170" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto; width: 100%;"></a>';
    document.getElementById("ads_output2").innerHTML =  '<a href="'+data.ads_url+'" target="_blank"><img src="http://127.0.0.1:8000/'+data.ads_banner+'" height="100" width="1170" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto; width: 100%;"></a>';
    document.getElementById("ads_output3").innerHTML =  '<a href="'+data.ads_url+'" target="_blank"><img src="http://127.0.0.1:8000/'+data.ads_banner+'" height="100" width="1170" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto; width: 100%;"></a>';
    document.getElementById("ads_output4").innerHTML =  '<a href="'+data.ads_url+'" target="_blank"><img src="http://127.0.0.1:8000/'+data.ads_banner+'" height="100" width="1170" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto; width: 100%;"></a>';
    document.getElementById("ads_output5").innerHTML =  '<a href="'+data.ads_url+'" target="_blank"><img src="http://127.0.0.1:8000/'+data.ads_banner+'" height="100" width="1170" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto; width: 100%;"></a>';
    document.getElementById("ads_output6").innerHTML =  '<a href="'+data.ads_url+'" target="_blank"><img src="http://127.0.0.1:8000/'+data.ads_banner+'" height="100" width="1170" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto; width: 100%;"></a>';
    document.getElementById("ads_output7").innerHTML =  '<a href="'+data.ads_url+'" target="_blank"><img src="http://127.0.0.1:8000/'+data.ads_banner+'" height="100" width="1170" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto; width: 100%;"></a>';
    document.getElementById("ads_output8").innerHTML =  '<a href="'+data.ads_url+'" target="_blank"><img src="http://127.0.0.1:8000/'+data.ads_banner+'" height="100" width="1170" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto; width: 100%;"></a>';
    document.getElementById("ads_output9").innerHTML =  '<a href="'+data.ads_url+'" target="_blank"><img src="http://127.0.0.1:8000/'+data.ads_banner+'" height="100" width="1170" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto; width: 100%;"></a>';
    document.getElementById("ads_output10").innerHTML =  '<a href="'+data.ads_url+'" target="_blank"><img src="http://127.0.0.1:8000/'+data.ads_banner+'" height="100" width="1170" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto; width: 100%;"></a>';
    document.getElementById("ads_output11").innerHTML =  '<a href="'+data.ads_url+'" target="_blank"><img src="http://127.0.0.1:8000/'+data.ads_banner+'" height="100" width="1170" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto; width: 100%;"></a>';
    document.getElementById("ads_output12").innerHTML =  '<a href="'+data.ads_url+'" target="_blank"><img src="http://127.0.0.1:8000/'+data.ads_banner+'" height="100" width="1170" style="max-width: 100%; display: block; margin-left: auto; margin-right: auto; width: 100%;"></a>';
  });
